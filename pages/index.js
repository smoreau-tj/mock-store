// Next.js modules
import Head from 'next/head'
import Image from 'next/image'
// CSS styles
import styles from '../styles/Home.module.css'
// Component imports
import Header from '../components/header'
import Footer from '../components/footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bob's SSWA Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      Hero section
      <section>
        <Image
          src='/images/Hero Copy-2.png'
          width={1440}
          height={600}
          alt='hero' />
      </section>
        Shopping Banner
      <section>
        <Image
          src='/images/Rectangle.png'
          width={1280}
          height={342}
          alt='banner' />
      </section>
      Product Links
      <section>
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
