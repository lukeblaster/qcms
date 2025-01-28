import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'QCMS - Quanto Custa Meu Setup?',
  description:
    'Uma forma prática e ágil de monitorar os preços dos seus produtos favoritos'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
