import bcrypt from "bcrypt"
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, name, password } = body
    if (!email || !name || !password) {
      return new NextResponse("Missing info", { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    })

    const cart = await prisma.cart.create({
      data: {
        userId: user.id,
        quantity: 0,
        price: 0,
      },
    })

    const favorites = await prisma.favoriteList.create({
      data: {
        userId: user.id,
      },
    })

    return NextResponse.json({ user, cart, favorites }, { status: 201 })
    // return NextResponse.json("done", { status: 201 })
  } catch (error) {
    console.log(error, "REGISTRATION_ERROR")
    return new NextResponse("Something went wrong, please try again", {
      status: 500,
    })
  }
}
