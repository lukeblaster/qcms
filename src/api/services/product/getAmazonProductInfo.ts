'use server'

import axios from 'axios'
import { JSDOM } from 'jsdom'
import { ProductType } from '../../controllers/product/fetchProductInfo'

const defaultProduct = {
  name: 'Produto não disponível',
  price: 0,
  productUrl: '#',
  imageUrl:
    'https://preview.redd.it/x37wd2mzh6n31.png?width=1080&crop=smart&auto=webp&s=d6791e70211c04a331cd14c9ce88ad6a1193f23d'
}

export async function getAmazonProductInfo(url: any) {
  try {
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
    const price = +rawPrice || 0

    // Título do Produto

    const productTitle =
      dom.window.document.querySelector('#productTitle')?.textContent ||
      'Produto não disponível'

    // Imagem do Produto
    const imageURL =
      dom.window.document
        .querySelector('.a-dynamic-image')
        ?.getAttribute('src') ||
      'https://preview.redd.it/x37wd2mzh6n31.png?width=1080&crop=smart&auto=webp&s=d6791e70211c04a331cd14c9ce88ad6a1193f23d'

    const data: ProductType = {
      name: productTitle,
      price: price,
      productUrl: url,
      imageUrl: imageURL
    }

    return data || defaultProduct
  } catch (error) {
    console.warn(error)
    return defaultProduct
  }
}
