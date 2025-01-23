'use client'
import { ProductType } from '@/api/controllers/product'

interface manageLocalStorageProps {
  method: string
  product?: ProductType
}

export const manageLocalStorage = ({
  method,
  product
}: manageLocalStorageProps) => {
  if (method == 'set') {
    const products = JSON.parse(localStorage.getItem('products') || '[]')

    products.push(product)

    localStorage.setItem('products', products)

    return
  }

  const products = JSON.parse(localStorage.getItem('products') || '[]')

  return products
}
