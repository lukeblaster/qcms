import * as S from './styles'
const ProductContainer = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <S.Wrapper>{children}</S.Wrapper>
}
export default ProductContainer
