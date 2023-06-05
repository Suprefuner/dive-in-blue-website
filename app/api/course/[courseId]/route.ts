import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"
import getCurrentUser from "@/app/actions/getCurrentUser"

interface IParams {
  courseId: string
}

const whiteList = [`ADMIN`, `COACH`]

/*
======================================================
GET SINGLE COURSE
======================================================
*/
export async function GET(req: Request, { params }: { params: IParams }) {
  try {
    const { courseId } = params
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    })

    if (!course)
      return new NextResponse(`can't find course with id: ${courseId}`)

    return NextResponse.json(course, { status: 200 })
  } catch (error: any) {
    console.log(error, "GET SINGLE COURSE ERROR")
    return new NextResponse("error", { status: 500 })
  }
}

/*
======================================================
UPDATE COURSE
======================================================
*/
export async function PATCH(req: Request, { params }: { params: IParams }) {
  try {
    const user = await getCurrentUser()
    if (!user || !whiteList.includes(user.role)) {
      return new NextResponse("Unauthorized", { status: 403 })
    }

    const { courseId } = params
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    })

    if (!course) {
      return new NextResponse(`can't find course with id: ${courseId}`)
    }

    const body = await req.json()
    const updateBody = { ...body }

    for (const [key, value] of Object.entries(body)) {
      if (!value) delete updateBody[key]
      else updateBody[key] = value
    }

    const updatedCourse = await prisma.course.update({
      where: { id: courseId },
      data: { ...updateBody },
    })

    return NextResponse.json(updatedCourse, { status: 200 })
  } catch (error: any) {
    console.log("ERROR_UPDATE_COURSE")
    return new NextResponse("error", { status: 500 })
  }
}

/*
======================================================
DELETE COURSE
======================================================
*/
export async function DELETE(req: Request, { params }: { params: IParams }) {
  try {
    const { courseId } = params
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    })

    if (!course) {
      return new NextResponse(`can't find course with id: ${courseId}`)
    }

    await prisma.course.delete({
      where: { id: courseId },
    })

    return NextResponse.json("course deleted", { status: 200 })
  } catch (error: any) {
    console.log(error, "GET SINGLE COURSE ERROR")
    return new NextResponse("error", { status: 500 })
  }
}
