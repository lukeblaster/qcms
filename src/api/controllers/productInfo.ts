import { getProductInfo } from '../services/getProductInfo'
import { getAmazonProductInfo } from '../services/getAmazonProductInfo'
import { ProductType } from './product'

const defaultProduct = {
  id: '000000000',
  name: 'Produto não disponível',
  price: 0.0,
  productUrl: '',
  imageUrl: ''
}

export const fetchProductInfo = async (
  url: string,
  method: string
): Promise<ProductType> => {
  console.log(url)
  if (method == 'amazon') {
    const productInfo = await getAmazonProductInfo(url)

    return productInfo || defaultProduct
  }

  return defaultProduct
}
