import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import utilStyles from '../styles/utils.module.css'


export default function Header() {
  return (
    <header className={utilStyles.header}>
      <Link href='/cart'>
        <a>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </a>
      </Link>
    </header>
  )
}