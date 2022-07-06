import NavHeader from '@components/NavHeader'
import PageFooter from '@components/PageFooter'
import PageHeader from '@components/PageHeader'
import Sidebar from '@components/Sidebar'
import SidebarOverlay from '@components/SidebarOverlay/SidebarOverlay'
import React from 'react'

interface Props {
  children: React.ReactNode,
}

const Layout: React.FC<Props> = ({ children  }) => {

  return (
    <div className="mx-auto min-h-screen max-w-6xl">
      <div id='sidebar' className='w-60 h-full fixed z-[70] hidden lg:!block'>
        {/* <div className='w-full h-full overflow-hidden'>
          <div className='w-full h-full overflow-auto box-content pr-[18px] bg-white'>
            <div className='bg-white fixed w-56 z-[80]'>
              <Logo />
            </div>
            <div className='pt-28'>
              <CategoryTree />
            </div>
          </div>
        </div> */}
        <Sidebar />
      </div>
      <div className='lg:ml-60 h-full'>

        <div className='sticky top-0 z-10'>
          <div className='lg:hidden bg-white sticky top-0'>
            <NavHeader />

          </div>

          <div className='bg-white'>
            <PageHeader />
          </div>
        </div>

        <main>{children}</main>
        <PageFooter />
      </div>
      <SidebarOverlay />
    </div>
  )
}

export default Layout