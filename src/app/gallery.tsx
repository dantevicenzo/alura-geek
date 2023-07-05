import Image from 'next/image'
import styles from './gallery.module.css'
import arrowRight from '@/assets/arrow_right.svg'
import Link from 'next/link'

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
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
        <Link href="">
          Ver tudo <Image src={arrowRight} alt="" />
        </Link>
      </div>
      <ul className={styles.productsList}>
        {products.map((product) => (
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
