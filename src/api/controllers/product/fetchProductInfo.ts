import { getAmazonProductInfo } from '@/api/services/product/getAmazonProductInfo'
import { getKabumProductInfo } from '@/api/services/product/getKabumProductInfo'
import { getMercadoLivreProductInfo } from '@/api/services/product/getMercadoLivreProductInfo'

export type ProductType = {
  name: string
  price: number
  productUrl: string
  imageUrl: string
}

export const fetchProductInfo = async (url: string, method: string) => {
  if (method == 'kabum') {
    const productInfo = await getKabumProductInfo(url)
    return productInfo
  }

  if (method == 'mercado-livre') {
    const productInfo = await getMercadoLivreProductInfo(url)
    return productInfo
  }

  const productInfo = await getAmazonProductInfo(url)
  return productInfo
}
