'use client'

import { IconNode } from 'lucide'
import { useRenderIconFromNode } from '@/hooks/useRenderIconFromNode'
import * as S from './styles'

const Button = ({ icon, text }: { icon: IconNode; text: String }) => (
  <S.Button>
    {useRenderIconFromNode(icon)} <S.ButtonText>{text}</S.ButtonText>
  </S.Button>
)
export default Button
