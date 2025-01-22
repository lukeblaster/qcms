import { ExternalLink, XCircle } from 'lucide'
import React, { use } from 'react'
import * as S from './styles'
import { useRenderIconFromNode } from '@/hooks/useRenderIconFromNode'
import { Product, removeProduct } from '@/api/controllers/product'
import { getAmazonProductInfo } from '@/api/services/getAmazonProductInfo'

interface ProductCardProps {
  id: string
  name: string
  imageUrl: string
  productUrl: string
  price: number
}

const ProductCard = ({ productPromise }) => {
  const productInfo = use(productPromise)
  // const formattedPrice = props.price.toLocaleString('pt-BR', {
  //   style: 'currency',
  //   currency: 'BRL'
  // })

  console.log(productInfo)

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image />
      </S.ImageWrapper>
      <S.TitleContainer>
        <S.Title>Título</S.Title>
      </S.TitleContainer>
      <S.ProductPrice>R$ 329,99</S.ProductPrice>
      <S.DetailsWrapper>
        <S.Link href={props.productUrl} target="_blank">
          Visitar site
          <S.ExternalLinkIcon>
            {useRenderIconFromNode(ExternalLink)}
          </S.ExternalLinkIcon>
        </S.Link>
        <S.RemoveProductIcon>
          {useRenderIconFromNode(XCircle)}
        </S.RemoveProductIcon>
      </S.DetailsWrapper>
    </S.Wrapper>
    // <S.Wrapper key={props.id}>
    //   <S.ImageWrapper>
    //     <S.Image src={props.imageUrl} />
    //   </S.ImageWrapper>
    //   <S.TitleContainer>
    //     <S.Title>{props.name}</S.Title>
    //   </S.TitleContainer>
    //   <S.ProductPrice>{formattedPrice}</S.ProductPrice>
    //   <S.DetailsWrapper>
    //     <S.Link href={props.productUrl} target="_blank">
    //       Visitar site
    //       <S.ExternalLinkIcon>
    //         {useRenderIconFromNode(ExternalLink)}
    //       </S.ExternalLinkIcon>
    //     </S.Link>
    //     <S.RemoveProductIcon onClick={() => removeProduct(props.id)}>
    //       {useRenderIconFromNode(XCircle)}
    //     </S.RemoveProductIcon>
    //   </S.DetailsWrapper>
    // </S.Wrapper>
  )
}
export default ProductCard
