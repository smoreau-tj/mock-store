import utilStyles from '../styles/utils.module.css'

import Product from './product'

export default function ProductList({ products }) {
  return (
    <section className={utilStyles.featured}>
      <ul className={utilStyles.featuredList}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />
        })}
      </ul>
    </section>
  )
}

