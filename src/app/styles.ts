'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContentContainer = styled(Container)`
  margin: 5%;
  flex-direction: column;
  align-items: center;
  justify-content: normal;
  gap: 20px;
`

export const Div = styled.div<{ $column?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$column ? 'column' : 'row')};
  width: 100%;
`

export const SearchBoxContainer = styled(Div)`
  gap: 10px;
`

export const Title = styled.h1`
  font-size: xx-large;
  color: #00b2f3;
`

export const TitleDetail = styled.span`
  color: #f3cf00;
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

export const AddButton = styled.button`
  padding: 13px;
  width: 50%;
  max-width: 160px;
  background-color: #00b2f3;
  border: none;
  border-radius: 12px;
  color: #ffffff;
  font-size: medium;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(61, 191, 238);
  }
`

export const Warning = styled.p`
  font-size: small;
  font-weight: 600;
`
