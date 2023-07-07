import { products } from '@/app/db'
import Image from 'next/image'
import styles from './page.module.css'
import { Gallery } from '@/app/gallery'

interface IProductProps {
  params: {
    id: string
  }
}

export default function Product({ params }: IProductProps) {
  const selectedProduct = products.filter(
    (product) => product.id === Number(params.id),
  )[0]

  return (
    <div className={styles.container}>
      <div className={styles.productDetails}>
        <Image src={selectedProduct.imageUrl} width={560} height={403} alt="" />
        <div className={styles.details}>
          <h1>{selectedProduct.name}</h1>
          <strong>{selectedProduct.price}</strong>
          <p>{selectedProduct.description}</p>
        </div>
      </div>
      <Gallery
        id="similarProducts"
        title="Produtos similares"
        products={products.filter(
          (product) => product.category === selectedProduct.category,
        )}
        showSeeAllButton={false}
      />
    </div>
  )
}
