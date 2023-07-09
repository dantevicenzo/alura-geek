'use client'

import { IProduct } from '@/app/gallery'
import { products as dbProducts } from '../app/db'

export const useLocalStorage = () => {
  const localStorageProducts = localStorage.getItem(
    '@alura-geek:products-1.0.0',
  )

  if (localStorageProducts) {
    return JSON.parse(localStorageProducts) as IProduct[]
  } else {
    localStorage.setItem(
      '@alura-geek:products-1.0.0',
      JSON.stringify(dbProducts),
    )
    return dbProducts
  }
}
