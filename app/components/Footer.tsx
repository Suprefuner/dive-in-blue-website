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
    <footer className="bg-primary text-white pt-[70px] lg:pt-[110px] pb-[15px] relative ">
      <Container className="px-8">
        <div className="lg:flex items-start justify-between border-b border-white pb-10 mx-5 lg:mx-0">
          <div className="w-max mx-auto lg:mx-0">
            <div className="brightness-100 invert w-[300px] lg:w-[200px] h-[100px] ">
              <Image src="/dib_logo.svg" alt="logo" fill />
            </div>
            <ul className="flex items-center justify-center lg:justify-start gap-10 lg:gap-3 text-3xl mt-8 lg:mt-[60px] mb-[30px]">
              {icons.map(({ icon }, i) => (
                <li className="cursor-pointer" key={i}>
                  {icon}
                </li>
              ))}
            </ul>
          </div>
          <ul className="text-center lg:text-right [&>*:not(:last-child)]:mb-2 mt-[4rem]">
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
