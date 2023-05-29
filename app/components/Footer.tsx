"use client"

import Image from "next/image"
import Container from "./Container"
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai"

const icons = [
  { icon: <AiFillFacebook /> },
  { icon: <AiFillInstagram /> },
  { icon: <AiOutlineTwitter /> },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-[110px] pb-[15px]">
      <Container>
        <div className="flex items-start justify-between border-b border-white">
          <div>
            <div className="brightness-100 invert">
              <Image src="/dib_logo.svg" alt="logo" width={200} height={100} />
            </div>
            <ul className="flex items-center gap-3 text-3xl mt-[60px] mb-[30px]">
              {icons.map(({ icon }, i) => (
                <li className="cursor-pointer" key={i}>
                  {icon}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="text-right [&>*:not(:last-child)]:mb-2">
              <li>
                Tel: <span>+66 (0)77 123456</span>
              </li>
              <li>
                Email: <span>contact@diveinblue.com</span>
              </li>
              <li>
                TAT License No: <span>No: XX/00000</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center py-6 text-gray-400/50 text-sm">
          <span>
            &copy; {new Date().getFullYear()} Joe Chan All right reserve
          </span>
          <span>Design and build by Joe Chan</span>
        </div>
      </Container>
    </footer>
  )
}
export default Footer
