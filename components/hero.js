import Image from 'next/image'

import utilStyles from '../styles/utils.module.css'

export default function Hero() {
  return (
    <section className={utilStyles.hero}>

      <Image
        src='/images/Hero.png'
        width={1440}
        height={600}
        alt='hero' />

      <div className={utilStyles.heroLogo}>
        <Image
          src='/images/Logo@1x.png'
          width={312}
          height={129}
          alt='logo' />
      </div>

    </section>
  )
}