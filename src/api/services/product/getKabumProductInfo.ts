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

export async function getKabumProductInfo(url: any) {
  const body = await axios.get(url)
  const dom = new JSDOM(body.data)

  // Preço do Produto
  const rawPrice =
    dom.window.document
      .querySelector('.finalPrice')
      ?.textContent?.replace('.', '')
      .replace(',', '.')
      .replace('R$', '')
      .replace('&nbsp', '') || '0'

  const price = +rawPrice

  // Título do Produto
  const productTitle =
    dom.window.document.querySelector('.brTtKt')?.textContent ||
    'Título não disponível'

  // Imagem do Produto
  const imageURL =
    dom.window.document
      .querySelector('.selectedImage')
      ?.firstElementChild?.firstElementChild?.firstElementChild?.getAttribute(
        'src'
      ) ||
    'https://comicbook.com/wp-content/uploads/sites/4/2023/04/1dc82894-8d8d-49ea-9d1e-f7a63e95a2d5.jpg'

  const data: ProductType = {
    name: productTitle,
    price: price,
    productUrl: url,
    imageUrl: imageURL
  }

  return data || defaultProduct
}
