
import Layout from '../components/layout'
import Hero from '../components/hero'


import utilStyles from '../styles/utils.module.css'

export default function Categories() {
  return (
    <Layout>
        <Hero />
        <div className={utilStyles.categories}>
          <section className={utilStyles.category}>Men</section>
          <section className={utilStyles.category}>Women</section>
        </div>
    </Layout>
  )
}