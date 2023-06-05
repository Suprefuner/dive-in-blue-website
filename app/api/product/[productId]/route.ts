import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"
import getCurrentUser from "@/app/actions/getCurrentUser"

interface IParams {
  productId?: String
}

const whiteList = ["ADMIN"]

/*
======================================================
GET SINGLE PRODUCT
======================================================
*/
export async function GET(req: Request, { params }: { params: IParams }) {
  try {
    const { productId } = params
    if (!productId) {
      return new NextResponse(`missing product id`, { status: 400 })
    }

    const product = await prisma.product.findUnique({
      where: { id: productId as string },
    })

    if (!product) {
      return new NextResponse(`can't find product with Id: ${productId}`, {
        status: 404,
      })
    }

    return NextResponse.json(product, { status: 200 })
  } catch (error: any) {
    console.log(error, `Error GET SINGLE PRODUCT`)
    return new NextResponse(error, { status: 500 })
  }
}

/*
======================================================
UPDATE SINGLE PRODUCT
======================================================
*/
export async function PATCH(req: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser()
    if (!currentUser || !whiteList.includes(currentUser.role)) {
      return new NextResponse(`UnAuthorized`, { status: 403 })
    }

    const { productId } = params
    if (!productId) {
      return new NextResponse(`missing product id`, { status: 400 })
    }

    const product = await prisma.product.findUnique({
      where: { id: productId as string },
    })

    if (!product) {
      return new NextResponse(`can't find product with Id: ${productId}`, {
        status: 404,
      })
    }

    const body = await req.json()
    const updateContent = { ...body }

    for (const [key, value] of Object.entries(body)) {
      if (!value) delete updateContent[key]
    }

    const updatedProduct = await prisma.product.update({
      where: { id: productId as string },
      data: { ...updateContent },
    })

    return NextResponse.json(updatedProduct, { status: 200 })
  } catch (error: any) {
    console.log(error, `Error GET SINGLE PRODUCT`)
    return new NextResponse(error, { status: 500 })
  }
}

/*
======================================================
DELETE SINGLE PRODUCT
======================================================
*/
export async function DELETE(req: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser()
    if (!currentUser || !whiteList.includes(currentUser.role)) {
      return new NextResponse(`UnAuthorized`, { status: 403 })
    }

    const { productId } = params
    if (!productId) {
      return new NextResponse(`missing product id`, { status: 400 })
    }

    await prisma.product.delete({
      where: { id: productId as string },
    })

    return NextResponse.json({ status: 204 })
  } catch (error: any) {
    console.log(error, `Error GET SINGLE PRODUCT`)
    return new NextResponse(error, { status: 500 })
  }
}
