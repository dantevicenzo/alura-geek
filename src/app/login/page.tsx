import { Button } from '@/components/button'
import styles from './page.module.css'

import Input from '@/components/input'
import Link from 'next/link'

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <strong>Iniciar Sessão</strong>
        <Input id="email" type="email" placeholder="Escreva seu email" />
        <Input id="senha" type="password" placeholder="Escreva sua senha" />
        <Link href="/products">
          <Button variantColor="blue" variantPadding="lg">
            Entrar
          </Button>
        </Link>
      </form>
    </div>
  )
}
