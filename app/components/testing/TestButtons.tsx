import axios from "axios"
import { signIn, signOut, useSession } from "next-auth/react"

const TestButtons = () => {
  const session = useSession()
  const handleLogin = async (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement

    if (target.textContent === "email") {
      try {
        const res = await signIn("credentials", {
          email: "morris@gmail.com",
          password: "test1234",
          redirect: false,
        })

        if (res?.error) {
          console.log("logged in error")
        }
        if (res?.ok && !res?.error) {
          console.log("logged in success")
        }
      } catch (error) {
        console.log("error")
      }
    }

    if (target.textContent === "google") {
      try {
        const res = await signIn("google", { redirect: false })
        console.log(res)
      } catch (error) {}
    }
  }

  const handleLoginAsJoe = async () => {
    try {
      const res = await signIn("credentials", {
        email: "joe@gmail.com",
        password: "test1234",
        redirect: false,
      })

      if (res?.error) {
        console.log("login as joe error")
      }

      if (res?.ok && !res?.error) {
        console.log("login as joe success")
      }
    } catch (error: any) {
      console.log("error login as joe")
    }
  }

  const handleUpdate = async () => {
    const res = await axios.patch("/api/user", {
      name: "",
      bio: "yo whatsup",
    })
    console.log(res)
  }

  const handleDelete = async () => {
    const res = await axios.delete("/api/user")
    await signOut({ redirect: false })
    session.update()
    console.log(session)
  }

  const handleReset = async () => {
    const res = await axios.post("/api/auth/resetPassword", {
      currentPassword: "test12345",
      newPassword: "test1234",
      newPasswordConfirm: "test1234",
    })
    console.log(res)
  }

  const handleGetAllCourses = async () => {
    const res = await axios("/api/course")
    console.log(res)
  }

  const handleUpdateCourses = async () => {
    const res = await axios.patch("/api/course/647aaa6f5820b4e115f2338c", {
      name: "aow",
    })
    console.log(res)
  }

  const handleGetSingleCourse = async () => {
    const res = await axios("/api/course/647aaa6f5820b4e115f2338c")
    console.log(res)
  }

  const handleDeleteCourse = async () => {
    const res = await axios.delete("/api/course/647aaa6f5820b4e115f2338c")
    console.log(res)
  }

  const handleCreateProduct = async () => {
    const res = await axios.post("/api/product", {
      name: "my pant",
      gender: "men",
      category: "pants",
      size: ["s", "m"],
      color: "red",
      stock: 15,
      price: 100,
    })
    console.log(res)
  }

  const handleUpdateProduct = async () => {
    const res = await axios.patch("/api/product/647c29e0fae5c4814364c8ec", {
      name: "morris underwear",
      price: 300,
    })
    console.log(res)
  }

  const handleDeleteProduct = async () => {
    const res = await axios.delete("/api/product/647c29e0fae5c4814364c8ec")
    console.log(res)
  }

  return (
    <>
      {/* FIXME ONLY FOR AUTHENTICATION TESTING */}
      <button onClick={handleLogin} className="bg-red-200 px-4 py-1">
        google
      </button>
      <button onClick={handleLogin} className="bg-red-200 px-4 py-1">
        email
      </button>
      <button onClick={handleLoginAsJoe} className="bg-red-200 px-4 py-1">
        login as joe
      </button>
      <button onClick={() => signOut()} className="bg-red-200 px-4 py-1">
        logout
      </button>
      <button onClick={handleUpdate} className="bg-red-200 px-4 py-1">
        update me
      </button>
      <button onClick={handleDelete} className="bg-red-200 px-4 py-1">
        delete me
      </button>
      <button onClick={handleReset} className="bg-red-200 px-4 py-1">
        reset password
      </button>
      <button onClick={handleGetAllCourses} className="bg-red-200 px-4 py-1">
        get all course
      </button>
      <button onClick={handleUpdateCourses} className="bg-red-200 px-4 py-1">
        update course
      </button>
      <button onClick={handleGetSingleCourse} className="bg-red-200 px-4 py-1">
        get single course
      </button>
      <button onClick={handleDeleteCourse} className="bg-red-200 px-4 py-1">
        delete course
      </button>
      <button onClick={handleCreateProduct} className="bg-red-200 px-4 py-1">
        create product
      </button>
      <button onClick={handleUpdateProduct} className="bg-red-200 px-4 py-1">
        update single product
      </button>
      <button onClick={handleDeleteProduct} className="bg-red-200 px-4 py-1">
        delete product
      </button>
    </>
  )
}
export default TestButtons
