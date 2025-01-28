'use client'
import { XCircle } from 'lucide'
import * as S from './styles'
import { useRenderIconFromNode } from '@/hooks/useRenderIconFromNode'
import { removeProduct } from '@/api/controllers/product/product'
const RemoveProductButton = ({ productId }: { productId: string }) => (
  <S.RemoveProductIcon onClick={() => removeProduct(productId)}>
    {useRenderIconFromNode(XCircle)}
  </S.RemoveProductIcon>
)
export default RemoveProductButton
