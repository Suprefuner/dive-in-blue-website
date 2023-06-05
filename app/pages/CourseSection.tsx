"use client"

import { CourseCard } from "../components"
import { courseList } from "@/utils/constants"
import { TextBGColorChangeAnimation } from "../components"

const CourseSection = () => {
  return (
    <section className="min-h-screen relative grid bg-white">
      <div className="py-[8rem] self-center">
        <TextBGColorChangeAnimation className="text-4xl text-center lg:text-7xl">
          Explore with us
        </TextBGColorChangeAnimation>
      </div>
      <div
        className="
          h-full 
          grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
          md:[&>*:nth-child(odd)]:border-r
          lg:[&>*:not(:last-child)]:border-r
          border-b border-black
          "
      >
        {courseList.map((course, i) => (
          <CourseCard key={i} heading={course.title} content={course.content} />
        ))}
      </div>
    </section>
  )
}
export default CourseSection
