// Next.js modules
import Head from 'next/head'

// CSS styles
import utilStyles from '../styles/utils.module.css'

// Component imports
import Layout from '../components/layout'
import Hero from '../components/hero'
import Banner from '../components/banner'
import ProductList from '../components/productList'


export async function getStaticProps() {
  // fetch both collections and save to separate vars
  const fetchUrl = url => fetch(url).then(res => res.json())
  const [productsMen, productsWomen] = await Promise.all([
    fetchUrl('https://fakestoreapi.com/products/category/men clothing'),
    fetchUrl('https://fakestoreapi.com/products/category/women clothing')
  ])    
  // set response as props
  return {
    props: {
      productsMen, productsWomen
    }
  }
}


export default function Home({ productsMen, productsWomen }) {
  // combine collections
  const products = productsMen.concat(productsWomen)
  // select featured products by id
  const featuredProducts = products.filter(product => {
    if (product.id === 1 || product.id === 4 || product.id === 17 || product.id === 19) {
      return true
    }
  })
  
  return (
    <Layout>
      <div className={utilStyles.main}>
        <Head>
          <title>Bob's SSWA Store</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero />
        <Banner />
        <ProductList 
          products={featuredProducts} />
      </div>
    </Layout>
  )
}
