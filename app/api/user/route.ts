import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import getCurrentUser from "@/app/actions/getCurrentUser"

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json()

    const currentUser = await getCurrentUser()
    if (!currentUser) return new NextResponse("Unauthorized", { status: 403 })

    let updateContent = { ...body }
    for (const [key, value] of Object.entries(body)) {
      if (!value) delete updateContent[key]
      // @ts-ignore
      else currentUser[key] = value
    }

    const updatedUser = await prisma?.user.update({
      where: { email: currentUser.email as string },
      data: { ...updateContent },
    })

    return NextResponse.json(updatedUser, { status: 200 })
  } catch (error: any) {
    console.log(error, "ERROR_UPDATE_ME")
    return new NextResponse("INTERNAL ERROR", { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const currentUser = await getCurrentUser()
    if (!currentUser) return new NextResponse("Unauthorized", { status: 403 })

    await prisma?.user.delete({
      where: { email: currentUser.email as string },
    })

    return NextResponse.json({ status: 204 })
  } catch (error: any) {
    console.log(error, "ERROR_DELETE_ME")
    return new NextResponse("INTERNAL ERROR", { status: 500 })
  }
}
