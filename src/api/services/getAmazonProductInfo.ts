'use server'

import axios from 'axios'
import { JSDOM } from 'jsdom'
import { ProductType } from '../controllers/product'
import { v4 as v4uuid } from 'uuid'

export async function getAmazonProductInfo(url: any) {
  try {
    const body = await axios.get(url)
    const response = body.status
    const dom = new JSDOM(body.data)
    const id = v4uuid()

    // console.log('BODY: ' + body.status)
    // console.log('RESPONSE: ' + response)

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

    // console.log(priceWholeString, priceDecimalString, priceFractionString)
    // console.log(rawPrice, price)

    const productTitle =
      dom.window.document.querySelector('#productTitle')?.textContent ||
      'Título não disponível'

    const imageURL =
      dom.window.document
        .querySelector('.a-dynamic-image')
        ?.getAttribute('src') ||
      'https://comicbook.com/wp-content/uploads/sites/4/2023/04/1dc82894-8d8d-49ea-9d1e-f7a63e95a2d5.jpg'

    const data: ProductType = {
      id: id,
      name: productTitle,
      price: price,
      productUrl: url,
      imageUrl: imageURL
    }

    // console.log(data)

    return data
  } catch (error) {
    console.error(error)
  }
}
