import Image from "next/image"

interface Props {
  
}

const ImageHeader: React.FC<Props> = ({  }) => {
  
  return (
   <div className="px-4">
    <Image alt='product' width={1080} height={750} layout='responsive' src='https://www.w3schools.com/w3images/jeans.jpg'/>
   </div>
  )
}

export default ImageHeader