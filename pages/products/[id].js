import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'
import SingleProduct from '../../components/singleProduct'

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
      <div className={utilStyles.productContainer}>
      <SingleProduct product={product}/>
        {/* <div className={utilStyles.productImages}>
          <div className={utilStyles.imageMain}>
            <Image
              src='/images/Featured Product 1.png'
              width={182}
              height={182}
              alt='banner'
            />
          </div>
          <div className={utilStyles.productThumbs}>
            <div className={utilStyles.imageThumb}>{' '}</div>
            <div className={utilStyles.imageThumb}>{' '}</div>
            <div className={utilStyles.imageThumb}>{' '}</div>
          </div>
        </div>

        <div className={utilStyles.productDetails}>
          <h2>Product title</h2>
          <span>$100.00</span>
          <br />
          <br />
          <Link href='/cart'>
            <button>Add to cart</button>
          </Link>
          <br />
          <p>Lorem ipsum dolor entret. Lorem ipsum dolor entret. Lorem ipsum dolor entret. Lorem ipsum dolor entret. Lorem ipsum dolor entret. Lorem ipsum dolor entret. Lorem ipsum dolor entret. Lorem ipsum dolor entret.</p>
        </div> */}
      </div>
    </Layout>
  )
}