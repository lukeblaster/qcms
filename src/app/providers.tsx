'use client'

import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'

export function Providers({ children }: PropsWithChildren) {
  const theme = {
    colors: {
      primaryColor: '#f3cf00',
      secondaryColor: '#007ee4',
      blueHoverColor: '#008cff'
    }
  }

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}
