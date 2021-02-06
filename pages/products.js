import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/header'
import Footer from '../components/footer'

export default function ProductList() {
  return (
    <div>
    <Header />
      Product List Page
      <section>
      <Link href='/products/product'>
      <a>
      <Image
          src='/images/Featured Product 1-1.png'
          width={182}
          height={182}
          alt='banner' />
      </a>
      </Link>

        <Image
          src='/images/Featured Product 1-1.png'
          width={182}
          height={182}
          alt='banner' />
        <Image
          src='/images/Featured Product 1-1.png'
          width={182}
          height={182}
          alt='banner' />
        <Image
          src='/images/Featured Product 1-1.png'
          width={182}
          height={182}
          alt='banner' />
      </section>
      <Footer />
    </div>
  )
}