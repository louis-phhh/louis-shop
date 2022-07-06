import { ShoppingFilled } from '@ant-design/icons'
import Logo from '@components/Logo'
import { Input, Tree } from 'antd'
import { DataNode, TreeProps } from 'antd/lib/tree'
import React, { useState } from 'react'
import Search from './Search'

interface Props {
  
}

const PageHeader: React.FC<Props> = ({  }) => {
  
  return (
    <header className='px-4 py-6 flex pt-0 lg:pt-6'>
      <div className='flex-0 sm:flex-1'>
        
      </div>
      <div className='flex-[8] md:flex-[2]'>
        <Search />
      </div>
      <div className='flex-0 sm:flex-1 flex justify-end items-center'>
        <button className='hidden lg:block'>
          <ShoppingFilled className='text-2xl !text-[#7f5539]' />
        </button>
      </div>
    </header>
  )
}

export default PageHeader