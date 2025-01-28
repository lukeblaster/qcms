import * as S from './styles'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { useState } from 'react'
const SupportedSitesModal = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <S.Wrapper>
      <AlertDialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialog.Trigger asChild>
          <S.Warning>Sites suportados</S.Warning>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <S.Overlay onClick={() => setIsDialogOpen(false)} />
          <S.DialogContent>
            <S.DialogTitle>Site em fase de desenvolvimento!</S.DialogTitle>
            <S.DialogDescription>
              Apenas estes sites são compatíveis
            </S.DialogDescription>
            <S.SitesContainer>
              <ul>
                <li>🚀 Amazon</li>
                <li>🚀 Kabum</li>
              </ul>
            </S.SitesContainer>
            <S.ActionsContainer>
              <S.DialogAction>Começar a usar</S.DialogAction>
            </S.ActionsContainer>
          </S.DialogContent>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </S.Wrapper>
  )
}
export default SupportedSitesModal
