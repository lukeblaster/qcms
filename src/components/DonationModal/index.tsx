import { useState } from 'react'
import * as S from './styles'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import Link from 'next/link'
const DonationModal = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <AlertDialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialog.Trigger asChild>
        <S.Warning>Apoie me</S.Warning>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <S.Overlay onClick={() => setIsDialogOpen(false)} />
        <S.DialogContent>
          <S.DialogTitle>Apoie-me! 🥳</S.DialogTitle>
          {/* <S.DialogDescription>
            Você pode fazer isso clicando no botão <b>Apoiar</b>
          </S.DialogDescription> */}
          <S.SitesContainer>
            <p>
              ❤️ Um agradecimento especial a todos que usaram e me ajudaram de
              alguma forma!
            </p>{' '}
            <br />
            <p>
              💸 Esta ferramenta não foi feita com o intuito de gerar lucro mas
              você pode apoiar o meu trabalho com o valor que achar adequado.{' '}
            </p>
            <br />
            <p>
              <b>Deus abençoe a todos! 🙏🏽</b>
            </p>
          </S.SitesContainer>
          <S.ActionsContainer>
            <S.DialogCancel>Talvez depois</S.DialogCancel>
            <S.DialogAction asChild>
              <Link
                href="https://pixmeacoffee.vercel.app/blasterzinn30"
                target="_blank"
              >
                Apoiar
              </Link>
            </S.DialogAction>
          </S.ActionsContainer>
        </S.DialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
export default DonationModal
