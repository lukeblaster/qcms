'use client'
import { ProductType } from './fetchProductInfo'
import { manageLocalStorage } from '@/hooks/manageLocalStorage'

export const addProduct = (formData: FormData) => {
  const productUrl = formData.get('urlProduct')
  const url = productUrl?.toString()

  // Amazon
  if (url?.includes('amazon') || url?.includes('a.co')) {
    console.log('Produto Amazon')
    const product = {
      productUrl: productUrl,
      method: 'amazon'
    }

    manageLocalStorage({ method: 'set', key: 'products', value: product })

    // Disparar evento personalizado para notificar a atualização
    window.dispatchEvent(new Event('localStorageUpdated'))
    return
  }

  // Kabum
  if (url?.includes('kabum.com.br')) {
    console.log('Produto Kabum')
    const product = {
      productUrl: productUrl,
      method: 'kabum'
    }

    manageLocalStorage({ method: 'set', key: 'products', value: product })

    // Disparar evento personalizado para notificar a atualização
    window.dispatchEvent(new Event('localStorageUpdated'))
    return
  }

  // Mercado Livre
  if (url?.includes('mercadolivre.com.br')) {
    console.log('Produto Mercado Livre')
    const product = {
      productUrl: productUrl,
      method: 'mercado-livre'
    }

    manageLocalStorage({ method: 'set', key: 'products', value: product })

    // Disparar evento personalizado para notificar a atualização
    window.dispatchEvent(new Event('localStorageUpdated'))
    return
  }

  // Americanas
  if (url?.includes('americanas.com.br')) {
    console.log('Produto Americanas')
    const product = {
      productUrl: productUrl,
      method: 'americanas'
    }

    manageLocalStorage({ method: 'set', key: 'products', value: product })

    // Disparar evento personalizado para notificar a atualização
    window.dispatchEvent(new Event('localStorageUpdated'))
    return
  }

  // Alerta sobre produtos não suportados
  alert('Produto não suportado!')
}

export const removeProduct = (productIndex: string) => {
  const products = manageLocalStorage({ method: 'get', key: 'products' })
  const prices = manageLocalStorage({ method: 'get', key: 'prices' })

  console.log(productIndex)

  const newProducts = products.filter(
    (p: ProductType, index: string) => index != productIndex
  )

  const newPrices = prices.filter(
    (p: any, index: string) => index != productIndex
  )

  manageLocalStorage({ method: 'update', key: 'products', value: newProducts })
  manageLocalStorage({ method: 'update', key: 'prices', value: newPrices })

  // Disparar evento personalizado para notificar a atualização
  window.dispatchEvent(new Event('localStorageUpdated'))
  window.dispatchEvent(new Event('pricesUpdated'))
}
