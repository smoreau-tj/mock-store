import Image from 'next/image'
import Link from 'next/link'

export default function ProductList() {
  return (
    <div>
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
    </div>
  )
}