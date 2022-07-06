import CategoryTree from '@components/Category/CategoryTree'
import Logo from '@components/Logo'
import React from 'react'

interface Props {
  
}

const Sidebar: React.FC<Props> = ({  }) => {

  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='w-full h-full overflow-auto box-content pr-[16px] bg-white'>
        <div className='bg-white fixed w-56 z-[80]'>
          <Logo />
        </div>
        <div className='pt-28 pb-16'>
          <CategoryTree />
        </div>
      </div>
    </div>
  )
}

export default Sidebar