import Image from "next/image"

const ProfilePic = () => {
  return (
    <>
      <div
        className="
        w-[200px] h-[200px] border-8 border-white rounded-full overflow-hidden relative shadow-xl shadow-primary/20
        "
      >
        <Image
          src="/fakeUser.webp"
          alt="fake user profile"
          fill
          className="object-cover"
        />

        <Image
          src="/goggle.svg"
          alt="goggle illustrator"
          width={100}
          height={150}
          className="object-cover absolute top-[10%] left-1/2 -translate-x-[60%]"
        />
      </div>
    </>
  )
}
export default ProfilePic
