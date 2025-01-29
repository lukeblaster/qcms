'use client'
import * as S from './styles'
import { PlusCircle } from 'lucide'
import ProductsList from '@/components/ProductsList'
import Button from '@/components/Button'
import { addProduct } from '@/api/controllers/product/product'
import Form from 'next/form'
import FinalPrice from '@/components/FinalPrice'
import SupportedSitesModal from '@/components/SupportedSitesModal'
import DonationModal from '@/components/DonationModal'

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
              <Button icon={PlusCircle} text="Adicionar" />
            </S.SearchBoxContainer>
          </Form>
        </S.Div>

        <FinalPrice />

        <ProductsList />

        <S.Div>
          <DonationModal /> &nbsp;|&nbsp;
          <SupportedSitesModal />
        </S.Div>
      </S.ContentContainer>
    </S.Container>
  )
}
