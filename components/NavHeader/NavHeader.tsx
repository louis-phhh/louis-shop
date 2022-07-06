
import { MenuOutlined, ShoppingFilled } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"


interface Props {
  
}

const NavHeader: React.FC<Props> = ({  }) => {
  
  const handleOpenSideBar = () => {
    const eleSidebar = document?.getElementById('sidebar')
    const eleOverlay = document?.getElementById('overlay')
    eleSidebar && (eleSidebar.style.display = 'block')
    eleOverlay && (eleOverlay.style.display = 'block')
  }

  return (
    <div className="flex">
      <div className="flex-1">
        <Link href='/'>
          <a className="block w-[160px]">
            <Image width='160px' height='80' layout='responsive' alt='louis shop logo' src='/logo.png' />
          </a>
        </Link>
      </div>
      <div className="flex-1">

      </div>
      <div className="flex-1 flex justify-end items-center pr-4">
        <button className='mr-4 hover:scale-110'>
          <ShoppingFilled className='text-2xl !text-[#7f5539]' />
        </button>
        <button onClick={handleOpenSideBar} className='hover:scale-110'>
          <MenuOutlined className='text-xl !text-[#7f5539]' />
        </button>
      </div>
    </div>
  )
}

export default NavHeader