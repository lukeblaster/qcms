'use server'
import * as S from './styles'
import { calculateProductsValue } from '@/scripts/calculate-products-value'
import Product from '../Product'
import { Suspense } from 'react'
import ProductSkeleton from '../ProductSkeleton'

const ProductsList = () => {
  const productsStorage = [
    {
      url: 'https://a.co/d/dxI5teq',
      method: 'amazon'
    },
    {
      url: 'https://a.co/d/51epsF1',
      method: 'amazon'
    }
  ]

  // localStorage.setItem('products', JSON.stringify(productsStorage))

  return (
    <S.Wrapper>
      {productsStorage.map((product, index) => (
        <Suspense fallback={<ProductSkeleton />}>
          <Product url={product.url} method="amazon" />
        </Suspense>
      ))}
    </S.Wrapper>
  )
}
export default ProductsList
