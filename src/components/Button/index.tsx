'use client'

import { IconNode } from 'lucide'
import { renderIconFromNode } from '@/hooks/renderIconFromNode'
import * as S from './styles'

const Button = ({ icon, text }: { icon: IconNode; text: string }) => (
  <S.Button>
    {renderIconFromNode(icon)} <S.ButtonText>{text}</S.ButtonText>
  </S.Button>
)
export default Button
