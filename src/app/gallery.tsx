'use client'

import Image from 'next/image'
import styles from './gallery.module.css'
import arrowRight from '@/assets/arrow_right.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface IProduct {
  id: number
  imageUrl: string
  name: string
  price: string
}

interface IGalleryProps {
  title: string
  products: IProduct[]
}

export function Gallery({ title, products }: IGalleryProps) {
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
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
        <Link href="">
          Ver tudo <Image src={arrowRight} alt="" />
        </Link>
      </div>
      <ul className={styles.productsList}>
        {displayedProducts.map((product) => (
          <li key={product.id}>
            <Image src={product.imageUrl} height={174} width={176} alt="" />
            <span>{product.name}</span>
            <strong>{product.price}</strong>
            <a href="">Ver Produto</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
