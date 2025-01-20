'use client'
import { getProductInfo } from '../services/getProductInfo'

export type Product = {
  id: string
  name: string
  price: string
  productUrl: string
  imageUrl: string
}

export const addProduct = async (formData: FormData) => {
  const urlProduct = formData.get('urlProduct')
  const product = await getProductInfo(urlProduct)

  const stringData = localStorage.getItem('products') || '[]'
  const data = JSON.parse(stringData)

  console.log('-> ' + urlProduct)

  data.push(product)

  const newData = JSON.stringify(data)

  localStorage.setItem('products', newData)

  // Disparar evento personalizado para notificar a atualização
  window.dispatchEvent(new Event('localStorageUpdated'))
}

export const removeProduct = async (id: string) => {
  const stringData = localStorage.getItem('products') || '[]'
  const data = JSON.parse(stringData)

  const newData = data.filter((product: Product) => product.id != id)
  const newDataString = JSON.stringify(newData)

  localStorage.setItem('products', newDataString)

  // Disparar evento personalizado para notificar a atualização
  window.dispatchEvent(new Event('localStorageUpdated'))
}
