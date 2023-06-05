import { NextResponse } from "next/server"
import getCurrentUser from "@/app/actions/getCurrentUser"
import prisma from "@/app/libs/prismadb"
import bcrypt from "bcrypt"

export async function POST(req: Request) {
  const currentUser = await getCurrentUser()
  if (!currentUser) return new NextResponse("UnAuthorized", { status: 403 })

  const body = await req.json()
  const { currentPassword, newPassword, newPasswordConfirm } = body
  if (!currentPassword || !newPassword || !newPasswordConfirm) {
    return new NextResponse("Missing Info", { status: 400 })
  }

  if (newPassword !== newPasswordConfirm) {
    return new NextResponse(
      `password and confirm password doesn't match, please try again`
    )
  }

  const user = await prisma.user.findUnique({
    where: { email: currentUser.email as string },
  })

  if (!user) {
    return new NextResponse(`can't find user`, { status: 500 })
  }
  console.log(currentPassword)
  console.log(user.hashedPassword)

  const isPasswordCorrect = await bcrypt.compare(
    currentPassword,
    user?.hashedPassword!
  )

  if (!isPasswordCorrect) {
    return new NextResponse(`password doesn't correct`, { status: 500 })
  }

  const hashedPassword = await bcrypt.hash(newPassword, 12)

  await prisma.user.update({
    where: { email: currentUser.email as string },
    data: { hashedPassword },
  })

  return NextResponse.json(user, { status: 200 })
}
