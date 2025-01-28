'use client'
import * as S from './styles'
import { useEffect, useState } from 'react'
import Product from '../Product'
import { manageLocalStorage } from '@/hooks/manageLocalStorage'
import {
  fetchProductInfo,
  ProductType
} from '@/api/controllers/product/fetchProductInfo'

const ProductsList = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [productsData, setProductsData] = useState<ProductType[]>([])

  function updateProductsList() {
    const data = manageLocalStorage({ method: 'get', key: 'products' })

    window.dispatchEvent(new Event('pricesUpdated'))
    setProducts(data)
  }

  useEffect(() => {
    manageLocalStorage({
      method: 'removeAll',
      key: 'prices'
    })
    updateProductsList()

    const handleStorageChange = () => updateProductsList()
    window.addEventListener('localStorageUpdated', handleStorageChange)

    return () => {
      window.removeEventListener('localStorageUpdated', handleStorageChange)
    }
  }, [])

  useEffect(() => {
    async function fetchProductData() {
      const productData = await Promise.all(
        products.map(async (product) => {
          const data = await fetchProductInfo(
            product.productUrl,
            product.method
          )
          return {
            ...data,
            name: data.name,
            price: data.price,
            productUrl: data.productUrl,
            imageUrl: data.imageUrl
          }
        })
      )

      console.log('productData ->' + productData)

      setProductsData(productData)
    }

    fetchProductData()
  }, [products])

  return (
    <S.Wrapper>
      {products.map((p, index) => (
        <Product
          key={index}
          productIndex={index.toString()}
          productData={productsData[index]}
        />
      ))}
    </S.Wrapper>
  )
}
export default ProductsList
