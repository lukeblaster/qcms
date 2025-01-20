'use client'

import * as S from './styles'
const Button = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <S.Button>{children}</S.Button>
)
export default Button
