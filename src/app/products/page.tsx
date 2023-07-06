import { Button } from '@/components/button'
import styles from './page.module.css'
import Image from 'next/image'
import editIcon from '@/assets/edit-icon.svg'
import deleteIcon from '@/assets/delete-icon.svg'
import { products } from '../db'
import Link from 'next/link'

export default function Products() {
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
              <strong>{product.price}</strong>
              <span>#{product.id}</span>
              <button className={styles.delete}>
                <Image src={deleteIcon} width={24} height={24} alt="" />
              </button>
              <button className={styles.edit}>
                <Image src={editIcon} width={24} height={24} alt="" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
