import '../styles/globals.css'
import 'antd/dist/antd.variable.min.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from '@components/Head'
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#7f5539',
  },
});

const NoneLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (<>{children}</>)

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || NoneLayout
  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
