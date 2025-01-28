'use client'
import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 230px;
  height: 355px;
  border-radius: 12px;
  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  padding: 5px 10px;
  border-bottom: solid 1px rgb(220, 220, 220);

  @media (max-width: 768px) {
    width: 100%;
    max-height: 100%;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 0px 10px;
  margin-bottom: 5px;
`

export const Image = styled.img`
  height: 100%;
  max-height: 200px;
  width: 100%;

  @media (max-width: 768px) {
    height: 100%;
    max-height: 250px;
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ProductPrice = styled.span`
  font-size: x-large;
  color: ${(props) => props.theme.colors.secondaryColor};
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
    color: ${(props) => props.theme.colors.primaryColor};
    transition: all;
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
