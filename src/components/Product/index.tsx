'use server'
import React from 'react'
import * as S from './styles'

import { ProductType } from '@/api/controllers/product'
import RemoveProductButton from '../RemoveProductButton'
import ExternalLinkButton from '../ExternalLinkButton'
import { fetchProductInfo } from '@/api/controllers/productInfo'

interface ProductProps {
  url: string
  method: string
}

const Product = async ({ url, method }: ProductProps) => {
  const product: ProductType = await fetchProductInfo(url, method)
  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image src={product.imageUrl} />
      </S.ImageWrapper>
      <S.TitleContainer>
        <S.Title>{product.name}</S.Title>
      </S.TitleContainer>
      <S.ProductPrice>{formattedPrice}</S.ProductPrice>
      <S.DetailsWrapper>
        <S.Link href={product.productUrl} target="_blank">
          Visitar site
          <ExternalLinkButton />
        </S.Link>
        <RemoveProductButton />
      </S.DetailsWrapper>
    </S.Wrapper>
  )
}
export default Product
