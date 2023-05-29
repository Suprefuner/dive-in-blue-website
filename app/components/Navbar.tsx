"use client"

import Image from "next/image"
import Container from "./Container"
import { navLinks } from "@/utils/constants"
import { motion } from "framer-motion"
import { LegacyRef, forwardRef } from "react"

const HEIGHT = 80

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{
        delay: 6.5,
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      }}
      className="fixed top-0 z-[99] w-full text-white bg-black/20 backdrop-blur-sm"
      style={{ height: HEIGHT + "px" }}
    >
      <Container className="flex items-center justify-between  relative py-3">
        <div className="">
          <Image
            className="align-middle brightness-100 invert"
            src="/dib_logo.svg"
            alt="logo"
            width={200}
            height={70}
          />
        </div>
        <ul className="flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <li key={link} className="hover:text-yellow-300 transition">
              <a
                href="#"
                className="inline-block px-5"
                style={{
                  height: HEIGHT + "px",
                  lineHeight: HEIGHT + "px",
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <a
            href="#"
            className="inline-block px-5 py-2 rounded-full border-2 border-white hover:border-transparent hover:bg-white hover:text-black transition"
          >
            contact
          </a>
        </div>
      </Container>
    </motion.nav>
  )
}
// const Navbar = forwardRef((_, ref: LegacyRef<HTMLElement>) => {
//   return (
//     <nav
//       ref={ref}
//       className="fixed top-0 z-[99] w-full text-white bg-black/20 backdrop-blur-sm"
//       style={{ height: HEIGHT + "px" }}
//     >
//       <Container className="flex items-center justify-between  relative py-3">
//         <div className="">
//           <Image
//             className="align-middle brightness-100 invert"
//             src="/dib_logo.svg"
//             alt="logo"
//             width={200}
//             height={70}
//           />
//         </div>
//         <ul className="flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//           {navLinks.map((link) => (
//             <li key={link} className="hover:text-yellow-300 transition">
//               <a
//                 href="#"
//                 className="inline-block px-5"
//                 style={{
//                   height: HEIGHT + "px",
//                   lineHeight: HEIGHT + "px",
//                 }}
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div>
//           <a
//             href="#"
//             className="inline-block px-5 py-2 rounded-full border-2 border-white hover:border-transparent hover:bg-white hover:text-black transition"
//           >
//             contact
//           </a>
//         </div>
//       </Container>
//     </nav>
//   )
// })
Navbar.displayName = "Navbar"
export default Navbar
