'use client'

import Image from 'next/image'
import styles from './gallery.module.css'
import arrowRight from '@/assets/arrow_right.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export interface IProduct {
  id: number
  imageUrl: string
  category: string
  name: string
  price: string
  description: string
}

interface IGalleryProps {
  id: string
  title: string
  products: IProduct[]
  showSeeAllButton?: boolean
}

export function Gallery({
  id,
  title,
  products,
  showSeeAllButton = true,
}: IGalleryProps) {
  const [windowSize, setWindowSize] = useState('')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setWindowSize('mobile')
      } else if (window.innerWidth <= 1180) {
        setWindowSize('tablet')
      } else {
        setWindowSize('desktop')
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const maxProducts = windowSize === 'desktop' ? 6 : 4
  const displayedProducts = products.slice(0, maxProducts)

  return (
    <section className={styles.container} id={id}>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
        {showSeeAllButton && (
          <Link href="/login">
            Ver tudo <Image src={arrowRight} alt="" />
          </Link>
        )}
      </div>
      <ul className={styles.productsList}>
        {displayedProducts.map((product) => (
          <li key={product.id}>
            <Image src={product.imageUrl} height={174} width={176} alt="" />
            <span>{product.name}</span>
            <strong>{product.price}</strong>
            <Link href={`/products/${product.id}`}>Ver Produto</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
