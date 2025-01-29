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

export async function getKabumProductInfo(url: any) {
  try {
    const body = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'pt-BR,pt;q=0.9',
        Referer: 'https://www.kabum.com.br/',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache'
      }
    })
    const dom = new JSDOM(body.data)

    // Preço do Produto
    const rawPrice =
      dom.window.document
        .querySelector('.finalPrice')
        ?.textContent?.replace('.', '')
        .replace(',', '.')
        .replace('R$', '')
        .replace('&nbsp', '') || '0'

    const price = +rawPrice || 0

    // Título do Produto
    const productTitle =
      dom.window.document.querySelector('.brTtKt')?.textContent ||
      'Produto não disponível'

    // Imagem do Produto
    const imageURL =
      dom.window.document
        .querySelector('.selectedImage')
        ?.firstElementChild?.firstElementChild?.firstElementChild?.getAttribute(
          'src'
        ) ||
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
