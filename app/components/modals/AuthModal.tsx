"use client"

import useAuthModal from "@/app/hooks/useAuthModal"
import Modal from "./Modal"

const AuthModal = () => {
  const { isOpen, onClose, variant } = useAuthModal()
  const title = variant
  const bodyContent = (
    <div className="px-8">
      <div className="[&>*]:block">
        <label htmlFor="email" className="pl-2 mb-1">
          email
        </label>
        <input
          type="email"
          id="email"
          placeholder="please input your email"
          className="border-2 w-full rounded-lg px-2 py-1"
        />
      </div>
      <div className="[&>*]:block">
        <label htmlFor="password" className="pl-2 mb-1">
          email
        </label>
        <input
          type="password"
          id="password"
          placeholder="please input your password"
          className="border-2 w-full rounded-lg px-2 py-1"
        />
      </div>
      <button className="bg-secondary w-full p-2 rounded-lg text-white">
        submit
      </button>
      <hr />
      <div className="flex items-center gap-2 ">
        <button className="bg-secondary w-full p-2 rounded-lg text-white">
          Google
        </button>
        <button className="bg-secondary w-full p-2 rounded-lg text-white">
          Facebook
        </button>
      </div>
    </div>
  )

  if (!isOpen) return null

  return (
    <Modal isOpen={true} title={title} body={bodyContent} onClose={onClose} />
  )
}
export default AuthModal
