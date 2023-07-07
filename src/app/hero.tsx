import { Button } from '@/components/button'
import styles from './hero.module.css'
import Link from 'next/link'

export function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Dezembro Promocional</h2>
        <p>Produtos selecionados com 33% de desconto</p>
        <Link href="#consoles">
          <Button variantColor="blue" variantPadding="sm">
            Ver Consoles
          </Button>
        </Link>
      </div>
    </div>
  )
}
