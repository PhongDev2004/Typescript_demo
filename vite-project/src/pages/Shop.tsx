import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '~/types/Product'
import instance from '~/api'

type Props = {
  category: string
}

export default function Shop(props: Props) {
  console.log(props)

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProducts()
  }, [])

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900 text-center'>Our store</h2>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => (
            <div key={product.id} className='group relative'>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                <Link to={`/shop/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  />
                </Link>
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <Link to={`/shop/${product.id}`}>
                    <h3 className='text-sm text-gray-700'>
                      <span aria-hidden='true' className='absolute inset-0' />
                      <span className='text-sm font-medium'>{product.name}</span>
                    </h3>
                  </Link>
                  <p className='mt-1 text-sm text-gray-500'>{product.brand}</p>
                </div>
                <p className='text-sm font-medium text-gray-900'>{'$' + product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
