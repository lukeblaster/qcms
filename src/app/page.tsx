import ProductCard from '@/components/Product'
import * as S from './styles'
import { PlusCircle } from 'lucide'
import { useRenderIconFromNode } from '@/hooks/useRenderIconFromNode'
import ProductsList from '@/components/ProductsList'
import Button from '@/components/Button'
import { addProduct } from '@/api/controllers/product'
import Form from 'next/form'
import FinalPrice from '@/components/FinalPrice'

export default function Home() {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.Title>
          Quanto custa <S.TitleDetail>meu setup</S.TitleDetail>?
        </S.Title>

        <S.Div $column>
          <Form action={addProduct} style={{ width: '100%' }}>
            <S.SearchBoxContainer>
              <S.SearchInput
                type="text"
                name="urlProduct"
                placeholder="Digite ou cole o link do produto"
                required
              />
              <Button>{useRenderIconFromNode(PlusCircle)} Adicionar</Button>
            </S.SearchBoxContainer>
          </Form>
          <S.Warning>Sites suportados: Amazon</S.Warning>
        </S.Div>

        <ProductsList />

        <S.ContentContainer>
          <S.Title>Total</S.Title>
          <FinalPrice />
        </S.ContentContainer>
      </S.ContentContainer>
    </S.Container>
  )
}
