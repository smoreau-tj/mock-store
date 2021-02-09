import Header from './header'
import Footer from './footer'

import utilStyles from '../styles/utils.module.css'

export default function Layout({children}) {
  return (
    <>
      <Header />
        <main className={utilStyles.layout}>{children}</main>
      <Footer />
    </>
  )
}