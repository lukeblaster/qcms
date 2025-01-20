import { ExternalLink, XCircle } from 'lucide'
import React from 'react'
import * as S from './styles'
import { useRenderIconFromNode } from '@/hooks/useRenderIconFromNode'
import { removeProduct } from '@/api/controllers/product'

interface ProductCardProps {
  id: string
  name: string
  imageUrl: string
  productUrl: string
  price: string
}

const ProductCard = ({ props }: { props: ProductCardProps }) => {
  return (
    <S.Wrapper key={props.id}>
      <S.ImageWrapper>
        <S.Image src={props.imageUrl} />
      </S.ImageWrapper>
      <S.Title>{props.name}</S.Title>
      <S.ProductPrice>{props.price}</S.ProductPrice>
      <S.DetailsWrapper>
        <S.Link href={props.productUrl} target="_blank">
          Visitar site
          <S.ExternalLinkIcon>
            {useRenderIconFromNode(ExternalLink)}
          </S.ExternalLinkIcon>
        </S.Link>
        <S.RemoveProductIcon onClick={() => removeProduct(props.id)}>
          {useRenderIconFromNode(XCircle)}
        </S.RemoveProductIcon>
      </S.DetailsWrapper>
    </S.Wrapper>
  )
}
export default ProductCard
