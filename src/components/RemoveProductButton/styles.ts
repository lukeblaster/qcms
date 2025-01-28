'use client'

import styled from 'styled-components'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import '@radix-ui/colors/black-alpha.css'
import '@radix-ui/colors/mauve.css'
import '@radix-ui/colors/red.css'
import '@radix-ui/colors/violet.css'

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

export const Overlay = styled(AlertDialog.Overlay)`
  background-color: var(--black-a9);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`
export const IconContainer = styled.div`
  border: solid 3px ${(props) => props.theme.colors.red};
  border-radius: 50%;
  height: 15vh;
  width: 15vh;
  padding: 10px;
  margin-bottom: 20px;
  svg {
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.colors.red};
    stroke-width: 1px;
  }
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
export const DialogTitle = styled(AlertDialog.Title)`
  font-size: large;
`

export const DialogDescription = styled(AlertDialog.Description)`
  font-size: small;
  color: ${(props) => props.theme.colors.neutral};
  margin-bottom: 15px;
`

export const DialogCancel = styled(AlertDialog.Cancel)`
  all: unset;
  cursor: pointer;
  padding: 8px 20px;
  font-size: small;
`

export const DialogAction = styled(AlertDialog.Action)`
  all: unset;
  cursor: pointer;
  padding: 8px 20px;
  font-size: small;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.red};
  border-radius: 12px;
  transition: all;

  &:hover {
    color: ${(props) => props.theme.colors.red};
    background-color: ${(props) => props.theme.colors.white};
    border: solid 2px ${(props) => props.theme.colors.red};
    padding: 6px 18px;
  }
`
