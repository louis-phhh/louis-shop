import Image from 'next/image'
import React from 'react'
import ProductItem from './ProductItem'

interface Props {
  
}

const GridProduct: React.FC<Props> = ({   }) => {

  return (
    <div className='flex w-full p-4 px-1 flex-wrap'>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  )
}

export default GridProduct