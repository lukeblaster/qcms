'use client'

import * as S from './styles'
import { useEffect, useState } from 'react'
import { calculateProductsValue } from '@/scripts/calculate-products-value'
const FinalPrice = () => {
  const [finalPrice, setFinalPrice] = useState(0)

  useEffect(() => {
    async function getProductsValue() {
      const result = await calculateProductsValue()

      setFinalPrice(result)
    }

    getProductsValue()

    // Adiciona um ouvinte para detectar mudanças no localStorage
    window.addEventListener('pricesUpdated', getProductsValue)

    return () => {
      window.removeEventListener('pricesUpdated', getProductsValue)
    }
  }, [])

  return (
    <S.Wrapper>
      <S.Price>
        Valor total
        <S.PriceDetail>
          {finalPrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </S.PriceDetail>
      </S.Price>
    </S.Wrapper>
  )
}
export default FinalPrice
