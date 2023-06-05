import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
import getCurrentUser from "@/app/actions/getCurrentUser"

const whiteList = ["ADMIN", "COACH"]

// GET ALL COURSES
export async function GET() {
  try {
    const courses = await prisma.course.findMany()

    return NextResponse.json(courses, { status: 200 })
  } catch (error: any) {
    console.log(error, "ERROR_GET_ALL_COURSES")
    return new NextResponse("something went wrong", { status: 500 })
  }
}

// CREATE COURSES
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser()
    if (!user || !whiteList.includes(user.role)) {
      return new NextResponse("Unauthorized", { status: 403 })
    }

    const body = await req.json()
    const { name, startDate, endDate, instructorIds, price } = body

    if (!name || !startDate || !endDate || !instructorIds.length || !price) {
      throw new NextResponse("missing info", { status: 400 })
    }

    const course = await prisma.course.create({
      data: {
        name,
        startDate,
        endDate,
        price,
        instructorIds,
      },
    })

    return NextResponse.json(course, { status: 201 })
  } catch (error) {
    console.log("ERROR_CREATE_COURSE")
    return new NextResponse("error", { status: 500 })
  }
}
