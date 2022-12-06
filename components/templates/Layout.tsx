import Link from 'next/link'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'

type Props = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="relative bg-white dark:bg-gray-900 min-h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
