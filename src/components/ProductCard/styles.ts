'use client'

import styled from 'styled-components'
import { House } from 'lucide'
export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 220px;
  border-radius: 12px;
  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 0px 10px;
`
export const ImageWrapper = styled(Wrapper)`
  box-shadow: none;
  align-items: center;
`

export const Image = styled.img`
  width: 220px;
  height: 220px;
  margin-bottom: 10px;
`

export const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  max-width: 190px;
`

export const ProductPrice = styled.span`
  font-size: xx-large;
  color: #007ee4;
  font-weight: 700;
`

export const Link = styled.a`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
  font-size: medium;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: green;
  }
`

// Estilo para o wrapper do ícone
export const ExternalLinkIcon = styled.span`
  width: 16px;
  height: 16px;

  svg {
    width: 100%;
    height: 100%;
    stroke-width: 3px;
  }
`
