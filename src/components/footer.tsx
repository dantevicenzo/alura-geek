import Image from 'next/image'

import styles from './footer.module.css'
import logo from '@/assets/logo.svg'
import { Button } from './button'
import Link from 'next/link'
import { Input } from './input'
import { Textarea } from './textarea'

export function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.logoNavContainer}>
            <Image src={logo} height={50} width={176} alt="" />

            <nav className={styles.nav}>
              <ul>
                <li>
                  <Link href="">Quem somos nós</Link>
                </li>
                <li>
                  <Link href="">Política de privacidade</Link>
                </li>
                <li>
                  <Link href="">Programa fidelidade</Link>
                </li>
                <li>
                  <Link href="">Nossas lojas</Link>
                </li>
                <li>
                  <Link href="">Quero ser franqueado</Link>
                </li>
                <li>
                  <Link href="">Anuncie aqui</Link>
                </li>
              </ul>
            </nav>
          </div>

          <form action="submit" className={styles.form}>
            <strong>Fale conosco</strong>
            <Input id="name" type="text" placeholder="Nome" />
            <div className={styles.textareaMarginTop}>
              <Textarea id="message" placeholder="Escreva sua mensagem" />
            </div>
            <Button type="submit" variantColor="blue" variantPadding="sm">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
      <div className={styles.developedBy}>
        <span>Desenvolvido por Dante Vicenzo</span>
        <span>2023</span>
      </div>
    </footer>
  )
}
