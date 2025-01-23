'use server'
import { fetchProductInfo } from '@/api/controllers/productInfo'
import Product from '../Product'
import * as S from './styles'
import { Suspense } from 'react'
import ProductSkeleton from '../ProductSkeleton'

interface ProductBoxProps {
  url: string
  method: string
}

const ProductBox = async ({ url, method }: ProductBoxProps) => {
  const productPromise = fetchProductInfo(url, method)

  return (
    <S.ProductBoxWrapper>
      <Suspense fallback={<ProductSkeleton />}>
        <Product productPromise={productPromise} />
      </Suspense>
    </S.ProductBoxWrapper>
  )
}
export default ProductBox
