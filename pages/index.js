import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bob's Super Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>Hero section
      </section>
      <section>
        Shopping Banner
      </section>
      Something Else
      <section>

      </section>

    </div>
  )
}
