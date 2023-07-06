import { Button } from '@/components/button'
import styles from './page.module.css'

import { Input } from '@/components/input'

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <strong>Iniciar Sessão</strong>
        <Input id="email" type="email" placeholder="Escreva seu email" />
        <Input id="senha" type="password" placeholder="Escreva sua senha" />
        <Button variantColor="blue" variantPadding="lg">
          Entrar
        </Button>
      </form>
    </div>
  )
}
