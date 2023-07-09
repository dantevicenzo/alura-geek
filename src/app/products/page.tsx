'use client'

import { Button } from '@/components/button'
import styles from './page.module.css'
import Image from 'next/image'
import editIcon from '@/assets/edit-icon.svg'
import deleteIcon from '@/assets/delete-icon.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IProduct } from '../gallery'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { formatPriceInCents } from '@/utils/formatter'

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>(useLocalStorage())

  useEffect(() => {
    localStorage.setItem('@alura-geek:products-1.0.0', JSON.stringify(products))
  }, [products])

  function handleDeleteProduct(productToDelete: IProduct) {
    const filteredProducts = products.filter(
      (product) => product.id !== productToDelete.id,
    )
    setProducts(filteredProducts)
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <strong>Todos os produtos</strong>
          <Link href="/products/add">
            <Button variantColor="blue" variantPadding="sm">
              Adicionar Produto
            </Button>
          </Link>
        </div>
        <ul className={styles.productsList}>
          {products.map((product) => (
            <li key={product.id}>
              <Image src={product.imageUrl} width={176} height={174} alt="" />
              <span>{product.name}</span>
              <strong>{formatPriceInCents(product.price)}</strong>
              <span>#{product.id}</span>
              <button
                className={styles.delete}
                onClick={() => handleDeleteProduct(product)}
              >
                <Image src={deleteIcon} width={24} height={24} alt="" />
              </button>
              <Link href={`/products/edit/${product.id}`}>
                <button className={styles.edit}>
                  <Image src={editIcon} width={24} height={24} alt="" />
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
