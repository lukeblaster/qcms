import { fetchProductInfo } from '@/api/controllers/product'
import ProductCard from '../ProductCard'
import * as S from './styles'

interface ProductBoxProps {
  url: string
  method: string
}

const ProductBox = ({ url, method }: ProductBoxProps) => {
  const productPromise = fetchProductInfo(url, method)

  return (
    <S.Wrapper>
      <ProductCard productPromise={productPromise} />
    </S.Wrapper>
  )
}
export default ProductBox
