import ProductCard from '@/components/ProductCard'
import * as S from './styles'
import { PlusCircle } from 'lucide'
import { useRenderIconFromNode } from '@/hooks/useRenderIconFromNode'
import ProductContainer from '@/components/ProductContainer'
import Button from '@/components/Button'
import { addProduct } from '@/api/controllers/product'
import Form from 'next/form'

export default function Home() {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.Title>
          Quanto custa <S.TitleDetail>meu setup</S.TitleDetail>?
        </S.Title>

        <S.Div $column>
          <Form action={addProduct}>
            <S.SearchBoxContainer>
              <S.SearchInput
                type="text"
                name="urlProduct"
                placeholder="Digite ou cole o link do produto"
              />
              <Button>{useRenderIconFromNode(PlusCircle)} Adicionar</Button>
            </S.SearchBoxContainer>
          </Form>
          <S.Warning>Sites suportados: Amazon</S.Warning>
        </S.Div>

        <ProductContainer />

        <S.ContentContainer>
          <S.Title>Total: R$ 9.999,60</S.Title>
        </S.ContentContainer>
      </S.ContentContainer>
    </S.Container>
  )
}
