import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductList from '~/components/ProductList'
import { Product } from '~/types/Product'

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  return (
    <div>
      <ProductList category='male' />
    </div>
  )
}

export default Home
