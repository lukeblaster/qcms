'use client'

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Price = styled.h2`
  font-size: x-large;
  text-align: center;
`
export const PriceDetail = styled.p`
  font-size: xx-large;
  color: ${(props) => props.theme.colors.primaryColor};
  text-align: center;
`
