'use client'
import { manageLocalStorage } from '@/hooks/manageLocalStorage'

export async function calculateProductsValue() {
  const prices = manageLocalStorage({ method: 'get', key: 'prices' })

  const initialValue = 0
  const productsValue = prices.reduce(
    (acc: number, current: number) => acc + current,
    initialValue
  )

  return productsValue
}
