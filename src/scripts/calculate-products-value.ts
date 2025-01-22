'use client'

import { Product } from '@/api/controllers/product'

export async function calculateProductsValue() {
  const stringData = localStorage.getItem('products') || '[]'
  const data = await JSON.parse(stringData)

  const initialValue = 0
  const productsValue = data.reduce(
    (acc, current) => acc + current.price,
    initialValue
  )

  return productsValue
}
