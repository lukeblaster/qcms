import * as S from './styles'
import { Skeleton } from '@radix-ui/themes'
const ProductSkeleton = () => (
  <S.Wrapper>
    <Skeleton>
      <S.ImageWrapper>
        <S.Image />
      </S.ImageWrapper>
    </Skeleton>
    <Skeleton>
      <S.TitleContainer>
        <S.Title>Nome do produto</S.Title>
      </S.TitleContainer>
    </Skeleton>
    <Skeleton>
      <S.ProductPrice>R$ 299,99</S.ProductPrice>
    </Skeleton>
    <S.DetailsWrapper>
      <Skeleton>
        <S.Link target="_blank">
          Visitar site
          <S.ExternalLinkIcon></S.ExternalLinkIcon>
        </S.Link>
      </Skeleton>
    </S.DetailsWrapper>
  </S.Wrapper>
)
export default ProductSkeleton
