'use client'
import { useState } from 'react'
import { Trash2, XCircle } from 'lucide'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import * as S from './styles'
import { renderIconFromNode } from '@/hooks/renderIconFromNode'
import { removeProduct } from '@/api/controllers/product/product'
const RemoveProductButton = ({ productId }: { productId: string }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <AlertDialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialog.Trigger asChild>
        <S.RemoveProductIcon>{renderIconFromNode(XCircle)}</S.RemoveProductIcon>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <S.Overlay onClick={() => setIsDialogOpen(false)} />
        <S.DialogContent>
          <S.IconContainer>{renderIconFromNode(Trash2)}</S.IconContainer>
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
}

export default RemoveProductButton
