'use client'

import styled from 'styled-components'
export const Button = styled.button`
  padding: 13px;
  width: 50%;
  max-width: 160px;
  background-color: ${(props) => props.theme.colors.secondaryColor};
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
    background-color: ${(props) => props.theme.colors.blueHoverColor};
  }

  @media (max-width: 768px) {
    width: auto;
    svg {
      color: #ffffff;
    }
  }
`

export const ButtonText = styled.span`
  @media (max-width: 768px) {
    display: none;

    svg {
      color: #ffffff;
    }
  }
`
