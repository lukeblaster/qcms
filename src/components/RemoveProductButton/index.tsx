import { XCircle } from 'lucide'
import * as S from './styles'
import { useRenderIconFromNode } from '@/hooks/useRenderIconFromNode'
const RemoveProductButton = () => (
  <S.RemoveProductIcon>{useRenderIconFromNode(XCircle)}</S.RemoveProductIcon>
)
export default RemoveProductButton
