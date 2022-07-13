import { ShoppingFilled } from '@ant-design/icons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { MouseEventHandler } from 'react'

interface Props {
  
}

const ProductItem: React.FC<Props> = ({   }) => {
  const router = useRouter()

  const gotoProductDetail = () => {
    router.push('/products/ao-khoac-dep')
  }

  return (
    <div className='w-1/2 lg:w-1/4 p-3 mb-3'>
      <div className='w-full relative'>
        <Image onClick={gotoProductDetail} className='hover:scale-110 cursor-pointer duration-150' layout='responsive' width='200px' height='250px' alt='product image' src='https://www.w3schools.com/w3images/jeans1.jpg' />
      </div>
      <p onClick={gotoProductDetail} className='m-0 mt-3 cursor-pointer hover:underline'>Ripped Skinny Jeans</p>
      <p className='m-0'><strong>$24.99</strong></p>
    </div>
  )
}

export default ProductItem