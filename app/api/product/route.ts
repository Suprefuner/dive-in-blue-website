import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"
import getCurrentUser from "@/app/actions/getCurrentUser"

const whiteList = ["ADMIN"]
/*
======================================================
GET ALL PRODUCTS
======================================================
*/
export async function GET() {
  try {
    const products = await prisma.product.findMany()

    return NextResponse.json(products, { status: 200 })
  } catch (error: any) {
    console.log(error, `ERROR GET ALL PRODUCTS`)
    return new NextResponse("something went wrong", { status: 500 })
  }
}

/*
======================================================
CREATE PRODUCT
======================================================
*/
export async function POST(req: Request) {
  try {
    const body = await req.json()
    // const { name, gender, category, images, size, color, stock, price } = body

    const optionalList = ["description"]

    for (const [key, value] of Object.entries(body)) {
      if (!value && !optionalList.includes(key))
        return new NextResponse("missing info", { status: 400 })
    }

    const currentUser = await getCurrentUser()
    if (!currentUser || !whiteList.includes(currentUser.role)) {
      return new NextResponse("unauthorized", { status: 401 })
    }

    const product = await prisma.product.create({
      data: { ...body },
    })

    return NextResponse.json(product, { status: 200 })
  } catch (error: any) {
    console.log(error, `ERROR GET ALL PRODUCTS`)
    return new NextResponse("something went wrong", { status: 500 })
  }
}
