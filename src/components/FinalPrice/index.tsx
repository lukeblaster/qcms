'use client'

import * as S from './styles'
import { useEffect, useState } from 'react'
import { calculateProductsValue } from '@/scripts/calculate-products-value'
const FinalPrice = () => {
  const [finalPrice, setFinalPrice] = useState(0)

  async function getProductsValue() {
    const result = await calculateProductsValue()

    setFinalPrice(result)
  }

  useEffect(() => {
    getProductsValue()

    // Adiciona um ouvinte para detectar mudanças no localStorage
    const handleStorageChange = () => getProductsValue()
    window.addEventListener('localStorageUpdated', handleStorageChange)

    return () => {
      window.removeEventListener('localStorageUpdated', handleStorageChange)
    }
  }, [])

  return (
    <S.Title>
      {finalPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })}
    </S.Title>
  )
}
export default FinalPrice
