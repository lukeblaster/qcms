import { ExternalLink } from 'lucide'
import React from 'react'
import * as S from './styles'
import { useRenderIconFromNode } from '@/hooks/useRenderIconFromNode'

const ProductCard = () => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image src="/img/asus-4060.jpg" />
      </S.ImageWrapper>
      <S.Title>ASUS Dual GeForce RTX 4060 EVO OC Edition 8 GB GDDR6</S.Title>
      <S.ProductPrice>R$ 2.499,90</S.ProductPrice>
      <S.Link>
        Visitar site
        <S.ExternalLinkIcon>
          {useRenderIconFromNode(ExternalLink)}
        </S.ExternalLinkIcon>
      </S.Link>
    </S.Wrapper>
  )
}
export default ProductCard
