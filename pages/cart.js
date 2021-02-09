import Layout from '../components/layout'

import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const fetchUrl = url => fetch(url).then(res => res.json())
  const [user] = await Promise.all([
    fetchUrl('https://fakestoreapi.com/users/2')
  ])

  return {
    props: {
      user,
    }
  }
}

function capitalizeName(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Cart({ user }) {
  return (
    <Layout>
      <section className={utilStyles.cart}>Welcome, {capitalizeName(user.name.firstname)}!</section>
    </Layout>
  )
}