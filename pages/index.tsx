import Head from 'next/head'
import Image from 'next/image'

import useTrans from '@hooks/useTrans'
import Layout from '@components/Layout'
import ImageHeader from '@components/ImageHeader'
import GridProduct from '@components/GridProduct'

const Home = () => {
  const trans = useTrans()

  return (
    <div>
      <ImageHeader />
      <GridProduct />
    </div>
  )
}

Home.Layout = Layout

export default Home
