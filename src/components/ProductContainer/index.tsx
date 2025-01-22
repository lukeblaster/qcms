'use client'

import { useEffect, useState } from 'react'
import * as S from './styles'
import ProductCard from '../ProductCard'
import ProductBox from '../ProductBox'
import { calculateProductsValue } from '@/scripts/calculate-products-value'
import { Product } from '@/api/controllers/product'
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

  useEffect(() => {
    calculateProductsValue()
  }, [])

  return (
    <S.Wrapper>
      {products.map((product: Product, index) => (
        <ProductBox url={product.productUrl} method="amazon" />
      ))}
    </S.Wrapper>
  )
}
export default ProductContainer
