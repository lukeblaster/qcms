'use client'

import { useEffect, useState } from 'react'
import * as S from './styles'
import ProductCard from '../ProductCard'
const ProductContainer = () => {
  const [products, setProducts] = useState([])

  const loadProducts = () => {
    const stringData = localStorage.getItem('products') || '[]'
    const data = JSON.parse(stringData)

    setProducts(data)
  }

  useEffect(() => {
    loadProducts()

    // Adiciona um ouvinte para detectar mudanças no localStorage
    const handleStorageChange = () => loadProducts()
    window.addEventListener('localStorageUpdated', handleStorageChange)

    return () => {
      window.removeEventListener('localStorageUpdated', handleStorageChange)
    }
  }, [])

  return (
    <S.Wrapper>
      {products.map((product, index) => (
        <ProductCard key={index} props={product} />
      ))}
    </S.Wrapper>
  )
}
export default ProductContainer
