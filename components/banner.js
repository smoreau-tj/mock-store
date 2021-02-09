import Image from 'next/image'
import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'

export default function Banner() {
  return (
    <section className={utilStyles.banner}>
      <Image
        src='/images/Rectangle.png'
        width={1280}
        height={342}
        alt='banner' />
      <p>Free your wardrobe</p>
      <button>
        <Link href='/categories'>
          <a>
            Shop<br /> Now
          </a>
        </Link>
      </button>
    </section>
  )
}