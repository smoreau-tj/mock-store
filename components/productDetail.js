import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/layout'

import utilStyles from '../styles/utils.module.css'

export default function ProductDetail({ product }) {
  return (
  
      <div className={utilStyles.productContainer}>

        <div className={utilStyles.productImages}>
          <div className={utilStyles.imageMain}>
            <Image
              src={`${product.image}`}
              width={182}
              height={182}
              alt='banner'
            />
          </div>

          <div className={utilStyles.productThumbs}>
            <div className={utilStyles.imageThumb}>
              <Image
                src={`${product.image}`}
                width={80}
                height={80}
                alt='banner'
              />
            </div>
            <div className={utilStyles.imageThumb}>
              <Image
                src={`${product.image}`}
                width={80}
                height={80}
                alt='banner'
              />
            </div>
            <div className={utilStyles.imageThumb}>
              <Image
                src={`${product.image}`}
                width={80}
                height={80}
                alt='banner'
              />
            </div>

          </div>
        </div>

        <div className={utilStyles.productDetails}>
          <h2 className={utilStyles.productTitle}>{product.title}</h2>
          <h5 className={utilStyles.productPrice}>${product.price}</h5>
          <br />
          <br />
          <Link href='/cart'>
            <button className={utilStyles.addButton}>Add to cart</button>
          </Link>
          <br />
          <p className={utilStyles.productInfo}>{product.description}</p>
        </div>
      </div>

  )
}