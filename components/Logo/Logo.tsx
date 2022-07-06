import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  
}

const Logo: React.FC<Props> = ({   }) => {

  return (
    <Link href='/'>
      <a className='block p-6 h-24'>
        <Image layout='fill' alt='louis shop logo' src='/logo.png' />
      </a>
    </Link>
  )
}

export default Logo