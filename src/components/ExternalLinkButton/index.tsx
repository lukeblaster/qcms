import * as S from './styles'
import { ExternalLink } from 'lucide'
import { useRenderIconFromNode } from '@/hooks/useRenderIconFromNode'
const ExternalLinkButton = () => (
  <S.ExternalLinkIcon>{useRenderIconFromNode(ExternalLink)}</S.ExternalLinkIcon>
)
export default ExternalLinkButton
