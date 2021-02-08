import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

import utilStyles from '../../styles/utils.module.css'

export default function Product() {
  return (
    <Layout>
      <div className={utilStyles.productContainer}>
        <div className={utilStyles.productImages}>
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
          <h2>Product Title</h2>
          <span>$100.00</span>
          <br />
          <br />
          <Link href='/cart'>
            <button>Add to cart</button>
          </Link>
          <br />
          <p>Lorem ipsum dolor entret. Lorem ipsum dolor entret. Lorem ipsum dolor entret. Lorem ipsum dolor entret. Lorem ipsum dolor entret. Lorem ipsum dolor entret. Lorem ipsum dolor entret. Lorem ipsum dolor entret.</p>
        </div>
      </div>
    </Layout>
  )
}