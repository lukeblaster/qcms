'use client'
import { Trash2, XCircle } from 'lucide'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import * as S from './styles'
import { useRenderIconFromNode } from '@/hooks/useRenderIconFromNode'
import { removeProduct } from '@/api/controllers/product/product'
const RemoveProductButton = ({ productId }: { productId: string }) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <S.RemoveProductIcon>
        {useRenderIconFromNode(XCircle)}
      </S.RemoveProductIcon>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <S.Overlay />
      <S.DialogContent>
        <S.IconContainer>{useRenderIconFromNode(Trash2)}</S.IconContainer>
        <S.DialogTitle>Deseja excluir o produto?</S.DialogTitle>
        <S.DialogDescription>
          Esta ação não pode ser revertida
        </S.DialogDescription>
        <S.ActionsContainer>
          <S.DialogCancel>Cancelar</S.DialogCancel>
          <S.DialogAction onClick={() => removeProduct(productId)}>
            Excluir
          </S.DialogAction>
        </S.ActionsContainer>
      </S.DialogContent>
    </AlertDialog.Portal>
  </AlertDialog.Root>
)

export default RemoveProductButton
