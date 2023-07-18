"use client"

import axios from "axios"
import { useState } from "react"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { signIn } from "next-auth/react"
import { BsGoogle, BsFacebook } from "react-icons/bs"

import useAuthModal from "@/app/hooks/useAuthModal"
import Modal from "./Modal"
import Button from "../buttons/Button"
import Input from "../input/Input"
import { toast } from "react-hot-toast"

const AuthModal = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen, onClose, variant, setVariant } = useAuthModal()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const toggleVariant = () => {
    setVariant(variant === "LOGIN" ? "REGISTER" : "LOGIN")
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)

    if (variant === "REGISTER") {
      axios
        .post("/api/auth/register", data)
        .then(() => {
          signIn("credentials", data)
        })
        .then(() => {
          toast.success(`Welcome, ${data.name}`)
          reset()
        })
        .catch(() => toast.error("Invalid credentials"))
    }

    if (variant === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error(`something went wrong, please try again later`)
          }

          if (callback?.ok && !callback?.error) {
            toast.success(`Welcome back`)
            reset()
          }
        })
        .catch(() => toast.error("Invalid credentials"))
    }

    setIsLoading(false)
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  const title = variant
  const bodyContent = (
    <div className="px-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        {variant === "REGISTER" ? (
          <Input
            id="name"
            type="text"
            label="username"
            placeholder="please input your username"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
        ) : null}

        <Input
          id="email"
          type="email"
          placeholder="please input your email"
          register={register}
          errors={errors}
          disabled={isLoading}
          required={true}
        />
        <Input
          id="password"
          type="password"
          placeholder="please input your password"
          register={register}
          errors={errors}
          disabled={isLoading}
          required={true}
        />
        <Button label="submit" className="mt-5" />
      </form>
      <div className="mt-6 mb-1">
        <hr />
        <span className="block w-max px-2 mx-auto bg-white -translate-y-1/2 text-neutral-dark-1 text-sm">
          or continue with
        </span>
      </div>
      <div className="flex items-center gap-2 ">
        <Button
          label="google"
          variant="outline-secondary"
          onClick={() => signIn("google")}
          icon={BsGoogle}
        />
        <Button
          label="facebook"
          variant="outline-secondary"
          // FIXME add facebook feature
          // onClick={() => signIn("facebook")}
          icon={BsFacebook}
        />
      </div>
      <div className="text-sm text-neutral-dark-1 w-max mx-auto mt-5">
        <span>
          {variant === "LOGIN"
            ? "New to Dive in Blue?"
            : "Already have an account?"}
        </span>
        <span onClick={toggleVariant} className="ml-2 underline cursor-pointer">
          {variant === "LOGIN" ? "Create an account" : "Login"}
        </span>
      </div>
    </div>
  )

  if (!isOpen) return null

  return (
    <Modal
      isOpen={true}
      title={title}
      body={bodyContent}
      onClose={handleClose}
    />
  )
}
export default AuthModal
