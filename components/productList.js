import utilStyles from '../styles/utils.module.css'

import SingleProduct from './singleProduct'

export default function ProductList({ products }) {
  return (
    <section className={utilStyles.featured}>
      <ul className={utilStyles.featuredList}>
        {products.map((product) => {
          return <SingleProduct key={product.id} product={product} />
        })}
      </ul>
    </section>
  )
}

