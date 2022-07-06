import { CopyrightCircleFilled, CopyrightOutlined, CreditCardFilled, FacebookFilled, LinkedinFilled, MailFilled, PhoneFilled } from '@ant-design/icons'
import IconLocation from '@components/icons/IconLocation'
import Logo from '@components/Logo'
import { Button, Input, Tree } from 'antd'
import { DataNode, TreeProps } from 'antd/lib/tree'
import React, { useState } from 'react'

interface Props {
  
}

const PageFooter: React.FC<Props> = ({  }) => {
  
  return (
    <footer className='w-full pt-16 bg-[#f1f1f1]'>
      <div className='flex flex-wrap'>
        <form className='w-1/2 sm:w-1/3 order-1 flex-col items-center text-center px-4 pb-8 sm:pb-4'>
          <p className='m-0 mb-2 text-xl'>Contact</p>
          <p className='m-0 mb-2'>Questions? Go ahead.</p>
          <Input placeholder='name' className='!mb-2'/>
          <Input placeholder='email' type='email' className='!mb-2'/>
          <Input placeholder='subject' className='!mb-2'/>
          <Input placeholder='message' className='!mb-2'/>
          <Button className='w-full' type='primary' >Send</Button>
        </form>
        <div className='w-1/2 sm:w-1/3 order-3 sm:order-2 flex-col items-center text-center'>
          <p className='m-0 mb-2 text-xl'>About</p>
          <a className='block text-black hover:text-black underline hover:underline' href='/about'>About us</a>
        </div>
        <div className='w-1/2 sm:w-1/3 order-2 sm:order-3 px-4'>
          <p className='m-0 mb-2 text-xl'>Store</p>
          <p className='m-0 mb-2 flex'><IconLocation style={{ marginRight: '0.5rem' }}/>ABC, Louis Shop</p>
          <p className='m-0 mb-2 flex'><PhoneFilled className='w-5 h-5 text-lg mr-2' />0972701947</p>
          <p className='m-0 mb-6 flex'><MailFilled className='w-5 h-5 text-lg mr-2' />louis.phhh@gmail.com</p>
          <p>
            <a target='__blank' href='https://facebook.com/duchauu' className='text-black'><FacebookFilled className='w-5 h-5 text-lg mr-2'/></a>
            <a target='__blank' href='https://www.linkedin.com/in/duchauu/' className='text-black'><LinkedinFilled className='w-5 h-5 text-lg mr-2'/></a>
          </p>
        </div>
      </div>
      <p className='h-16 m-0 flex justify-center items-center'>
        2022 <CopyrightOutlined className='px-1 text-xs'/> <a target='__blank' href='https://facebook.com/duchauu' className='text-black'><strong>Hau Phan</strong></a>
      </p>
    </footer>
  )
}

export default PageFooter