
interface Props {
  
}

const SidebarOverlay: React.FC<Props> = ({  }) => {
  
  const handleCloseSidebar = () => {
    const eleSidebar = document?.getElementById('sidebar')
    const eleOverlay = document?.getElementById('overlay')
    eleSidebar && (eleSidebar.style.display = 'none')
    eleOverlay && (eleOverlay.style.display = 'none')
  }

  return (
    <div onClick={handleCloseSidebar} id='overlay' className='bg-black fixed w-full h-full top-0 left-0 z-[60] opacity-50 cursor-pointer hidden lg:!hidden' title='close side menu'>

    </div>
  )
}

export default SidebarOverlay
