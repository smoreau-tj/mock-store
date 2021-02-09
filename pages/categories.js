import Image from 'next/image'

import Layout from '../components/layout'
import Hero from '../components/hero'


import utilStyles from '../styles/utils.module.css'

export default function Categories() {
  return (
    <Layout>
        <Hero />
        <div className={utilStyles.categories}>
          <section className={utilStyles.category}>
          <Image 
            src='/images/mensCollection.png'
            width={443}
            height={256}
            alt='mens-collection'>
          </Image>
          </section>
          <section className={utilStyles.category}>
          <Image 
            src='/images/womensCollection.png'
            width={443}
            height={256}
            alt='womens-collection'>
          </Image>
          </section>
        </div>
    </Layout>
  )
}