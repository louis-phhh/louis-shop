import { ShoppingFilled } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'

interface Props {
  
}

const ProductItem: React.FC<Props> = ({   }) => {

  return (
    <div className='w-1/2 lg:w-1/4 p-3 mb-3'>
      <div className='w-full relative'>
        <Image layout='responsive' width='200px' height='250px' alt='product image' src='https://www.w3schools.com/w3images/jeans1.jpg' />
        <div className='absolute flex justify-center items-center group w-full h-full top-0 left-0'>
          <button className='hidden group-hover:flex items-center px-3 py-2 bg-[#7f5539] hover:bg-[#e6ccb2] !text-white'>
            Buy now
            <ShoppingFilled className='ml-2 text-lg' />
          </button>
        </div>
      </div>
      <p className='m-0 mt-3'>Ripped Skinny Jeans</p>
      <p className='m-0'><strong>$24.99</strong></p>
    </div>
  )
}

export default ProductItem