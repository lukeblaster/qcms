'use server'

import axios from 'axios'
import { JSDOM } from 'jsdom'
import { ProductType } from '../../controllers/product/fetchProductInfo'

const defaultProduct = {
  name: '',
  price: 0,
  productUrl: '',
  imageUrl: ''
}

export async function getAmazonProductInfo(url: any) {
  const body = await axios.get(url)
  const dom = new JSDOM(body.data)

  // Preço do Produto
  const priceWholeString =
    dom.window.document
      .querySelector('.a-price-whole')
      ?.textContent?.replace(',', '')
      .replace('.', '') || '0'

  const priceDecimalString =
    dom.window.document
      .querySelector('.a-price-decimal')
      ?.textContent?.replace(',', '.') || '.'

  const priceFractionString =
    dom.window.document.querySelector('.a-price-fraction')?.textContent || '0'

  const rawPrice = priceWholeString + priceDecimalString + priceFractionString
  const price = +rawPrice

  // Título do Produto

  const productTitle =
    dom.window.document.querySelector('#productTitle')?.textContent ||
    'Título não disponível'

  // Imagem do Produto
  const imageURL =
    dom.window.document
      .querySelector('.a-dynamic-image')
      ?.getAttribute('src') ||
    'https://comicbook.com/wp-content/uploads/sites/4/2023/04/1dc82894-8d8d-49ea-9d1e-f7a63e95a2d5.jpg'

  const data: ProductType = {
    name: productTitle,
    price: price,
    productUrl: url,
    imageUrl: imageURL
  }

  return data || defaultProduct
}
