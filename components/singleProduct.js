import Image from 'next/image'
import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'

export default function SingleProduct({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <a>
        <li className={utilStyles.productSingle}>
          <Image
            src={product.image}
            alt={product.name}
            width={182}
            height={182}
          />
          {/* <h2>{product.title}</h2> */}
          <h5>{product.price}</h5>
          {/* <button>Add to cart</button> */}
          {/* <p>{product.description}</p> */}
        </li>
      </a>
    </Link>
  )
}