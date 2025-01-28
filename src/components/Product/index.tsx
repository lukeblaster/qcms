'use client'
import * as S from './styles'

import RemoveProductButton from '../RemoveProductButton'
import ExternalLinkButton from '../ExternalLinkButton'
import { ProductType } from '@/api/controllers/product/fetchProductInfo'
import ProductSkeleton from '../ProductSkeleton'
import { manageLocalStorage } from '@/hooks/manageLocalStorage'
import { useEffect, useState } from 'react'

interface ProductProps {
  productIndex: string
  productData: ProductType
}

const Product = ({ productIndex, productData }: ProductProps) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (productData) {
      manageLocalStorage({
        method: 'push',
        key: 'prices',
        value: productData.price
      })

      window.dispatchEvent(new Event('pricesUpdated'))
    }

    setLoading(true)

    return () => {
      manageLocalStorage({
        method: 'removeAll',
        key: 'prices'
      })
      setLoading(false)
    }
  }, [productData])

  if (!loading || !productData) return <ProductSkeleton />

  const formattedPrice = productData.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image src={productData.imageUrl} />
      </S.ImageWrapper>

      <S.ContentContainer>
        <S.TitleContainer>
          <S.Title>{productData.name}</S.Title>
        </S.TitleContainer>
        <S.ProductPrice>{formattedPrice}</S.ProductPrice>
        <S.DetailsWrapper>
          <S.Link href={productData.productUrl} target="_blank">
            Visitar site
            <ExternalLinkButton />
          </S.Link>
          <RemoveProductButton productId={productIndex} />
        </S.DetailsWrapper>
      </S.ContentContainer>
    </S.Wrapper>
  )
}
export default Product
