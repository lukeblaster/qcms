'use client'

import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styled from 'styled-components'
export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: normal;
  margin: 5px;
  width: 100%;
  height: 100%;
`

export const Warning = styled.p`
  font-size: small;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`

export const Overlay = styled(AlertDialog.Overlay)`
  background-color: var(--black-a9);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const ActionsContainer = styled.div`
  display: flex;
`

export const DialogContent = styled(AlertDialog.Content)`
  background-color: var(--gray-1);
  border-radius: 6px;
  box-shadow: var(--shadow-6);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    outline: none;
  }
`
export const SitesContainer = styled.div`
  font-size: medium;
  display: flex;
  width: 100%;
  max-width: 400px;

  flex-direction: column;
  margin: 20px;

  li {
    list-style-type: none;
    margin: 3px 0px;
  }

  @media (max-width: 768px) {
    max-width: 280px;
  }
`

export const DialogTitle = styled(AlertDialog.Title)`
  font-size: large;
  margin-bottom: 5px;
`

export const DialogDescription = styled(AlertDialog.Description)`
  font-size: medium;
  color: ${(props) => props.theme.colors.neutral};

  @media (max-width: 768px) {
    font-size: medium;
    text-align: center;
  }
`

export const DialogCancel = styled(AlertDialog.Cancel)`
  all: unset;
  cursor: pointer;
  padding: 8px 20px;
  font-size: small;
  margin-right: 15px;
`

export const DialogAction = styled(AlertDialog.Action)`
  all: unset;
  cursor: pointer;
  padding: 8px 20px;
  font-size: medium;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 12px;
  transition: all;

  &:hover {
    color: ${(props) => props.theme.colors.secondaryColor};
    background-color: ${(props) => props.theme.colors.white};
    border: solid 2px ${(props) => props.theme.colors.secondaryColor};
    padding: 6px 18px;
  }
`
