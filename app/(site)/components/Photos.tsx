import Image from "next/image"
import { galleryPhotos } from "@/utils/constants"
import useGalleryModal from "@/app/hooks/useGalleryModal"

const Photos = () => {
  const { onOpen, setCurrentPhoto } = useGalleryModal()

  const handleClick = (photo: string) => {
    setCurrentPhoto(photo)
    onOpen()
  }

  return (
    <>
      {galleryPhotos.map((photo, i) => (
        <div
          key={i}
          className="w-[450px] overflow-hidden"
          onClick={() => handleClick(photo)}
        >
          <Image
            src={photo}
            alt="picture of underwater"
            priority={true}
            width={450}
            height={200}
            className="object-cover aspect-video hover:scale-110 transition duration-300 cursor-pointer"
          />
        </div>
      ))}
    </>
  )
}
export default Photos
