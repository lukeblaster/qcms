'use client'

import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 220px;
  height: 365px;
  border-radius: 12px;
  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 0px 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    max-width: 180px;
  }
`
export const ImageWrapper = styled(Wrapper)`
  box-shadow: none;
  align-items: center;
`

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`

export const Image = styled.img`
  width: 220px;
  height: 220px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 100%;
    max-height: 140px;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  font-weight: 600;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ProductPrice = styled.span`
  font-size: xx-large;
  color: #007ee4;
  font-weight: 700;
`

export const Link = styled.a`
  display: flex;
  gap: 5px;
  font-size: medium;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: black;
  text-overflow: ellipsis;

  &:visited {
    color: black;
  }

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

export const RemoveProductIcon = styled.span`
  width: 24px;
  height: 24px;
  color: red;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`
