'use server'

import axios from 'axios'
import { JSDOM } from 'jsdom'
import { Product } from '../controllers/product'
import { v4 as v4uuid } from 'uuid'

export async function getProductInfo(url: any) {
  try {
    const body = await axios.get(url)
    const dom = new JSDOM(body.data)
    const id = v4uuid()

    const priceWhole =
      dom.window.document.querySelector('.a-offscreen')?.textContent || ''

    const productTitle =
      dom.window.document.querySelector('#productTitle')?.textContent || ''

    const imageURL =
      dom.window.document
        .querySelector('.a-dynamic-image')
        ?.getAttribute('src') || ''

    const data: Product = {
      id: id,
      name: productTitle,
      price: priceWhole,
      productUrl: url,
      imageUrl: imageURL
    }

    console.log(data)

    return data
  } catch (error) {
    console.error(error)
  }
}
