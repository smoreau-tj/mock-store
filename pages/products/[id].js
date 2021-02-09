import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'
import ProductDetail from '../../components/productDetail'

import utilStyles from '../../styles/utils.module.css'


export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  
  const paths = products.map((product) => ({
    params: { id: `${product.id}` } ,
  }))
  
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product = await res.json()
  
  return { props: { product } }
}


export default function Product({ product }) {
  return (
    <Layout>
      <ProductDetail product={product}/>
    </Layout>
  )
}