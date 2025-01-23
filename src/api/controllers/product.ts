'use client'
import { getProductInfo } from '../services/getProductInfo'
import { v4 as v4uuid } from 'uuid'

export type ProductType = {
  id: string
  name: string
  price: number
  productUrl: string
  imageUrl: string
}

export const addProduct = async (formData: FormData) => {
  const id = v4uuid()
  const productUrl = formData.get('urlProduct')
  const product = {
    id: id,
    productUrl: productUrl,
    method: 'amazon'
  }

  const stringData = localStorage.getItem('products') || '[]'
  const data = JSON.parse(stringData)

  data.push(product)

  const newData = JSON.stringify(data)

  localStorage.setItem('products', newData)

  // Disparar evento personalizado para notificar a atualização
  window.dispatchEvent(new Event('localStorageUpdated'))
}

export const removeProduct = async (id: string) => {
  const stringData = localStorage.getItem('products') || '[]'
  const data = JSON.parse(stringData)

  const newData = data.filter((product: ProductType) => product.id != id)
  const newDataString = JSON.stringify(newData)

  localStorage.setItem('products', newDataString)

  // Disparar evento personalizado para notificar a atualização
  window.dispatchEvent(new Event('localStorageUpdated'))
}
