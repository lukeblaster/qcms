import Main from '@/components/Main'
import ProductCard from '@/components/ProductCard'
import * as S from './styles'
import { PlusCircle } from 'lucide'
import { useRenderIconFromNode } from '@/hooks/useRenderIconFromNode'
import ProductContainer from '@/components/ProductContainer'

export default function Home() {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.Title>
          Quanto custa <S.TitleDetail>meu setup</S.TitleDetail>?
        </S.Title>

        <S.Div $column>
          <S.SearchBoxContainer>
            <S.SearchInput
              type="text"
              placeholder="Digite ou cole o link do produto"
            />
            <S.AddButton>
              {useRenderIconFromNode(PlusCircle)}Adicionar
            </S.AddButton>
          </S.SearchBoxContainer>
          <S.Warning>Sites suportados: Kabum, Amazon, Pichau</S.Warning>
        </S.Div>

        <ProductContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductContainer>

        <S.ContentContainer>
          <S.Title>Total: R$ 9.999,60</S.Title>
        </S.ContentContainer>
      </S.ContentContainer>
    </S.Container>
  )
}
