'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: normal;
  margin: 5px;
  width: 100%;
  height: 100%;
  gap: 10px;
`

export const Div = styled.div<{ $column?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$column ? 'column' : 'row')};
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const SearchBoxContainer = styled(Div)`
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
  }
`

export const Title = styled.h1`
  font-size: xx-large;
  color: ${(props) => props.theme.colors.secondaryColor};

  @media (max-width: 768px) {
    font-size: x-large;
  }
`

export const TitleDetail = styled.span`
  color: ${(props) => props.theme.colors.secondaryColor};
`

export const SearchInput = styled.input`
  padding: 14px 15px;
  width: 100%;
  max-width: 550px;
  border-radius: 12px;
  border-color: #878787;
  border-width: 1px;
  font-size: medium;

  &::placeholder {
    color: #a0a0a0;
    font-style: italic;
  }
`

export const Warning = styled.p`
  font-size: small;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`
