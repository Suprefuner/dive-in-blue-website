"use client"

import { CourseCard } from "../components"
import { courseList } from "@/utils/constants"
import { TextBGColorChangeAnimation } from "../components"

const CourseSection = () => {
  return (
    <section className="h-screen relative bg-trinary/10">
      <div className="absolute left-1/2 top-[200px] -translate-x-1/2">
        <TextBGColorChangeAnimation className="text-8xl">
          Explore with us
        </TextBGColorChangeAnimation>
      </div>
      <div className="grid grid-cols-4 content-end h-full">
        {courseList.map((course, i) => (
          <CourseCard key={i} heading={course.title} content={course.content} />
        ))}
      </div>
    </section>
  )
}
export default CourseSection
