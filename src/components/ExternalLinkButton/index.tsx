'use client'
import * as S from './styles'
import { ExternalLink } from 'lucide'
import { renderIconFromNode } from '@/hooks/renderIconFromNode'
const ExternalLinkButton = () => (
  <S.ExternalLinkIcon>{renderIconFromNode(ExternalLink)}</S.ExternalLinkIcon>
)
export default ExternalLinkButton
