import { Button } from '@/components/button'
import styles from './page.module.css'

import { Input } from '@/components/input'
import { Textarea } from '@/components/textarea'
import Link from 'next/link'

export default function AddNewProduct() {
  return (
    <div className={styles.container}>
      <form action="submit" className={styles.form}>
        <h1>Adicionar novo produto</h1>
        <Input id="url" placeholder="URL da imagem" />
        <Input id="category" placeholder="Categoria" />
        <Input id="name" placeholder="Nome do produto" />
        <Input id="price" placeholder="Preço do produto" />
        <Textarea id="description" placeholder="Descrição do produto" />
        <Link href="/products">
          <Button
            variantColor="blue"
            variantPadding="fill"
            responsivity={false}
          >
            Adicionar produto
          </Button>
        </Link>
      </form>
    </div>
  )
}
