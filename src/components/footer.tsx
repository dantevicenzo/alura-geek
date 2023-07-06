import Image from 'next/image'

import styles from './footer.module.css'
import logo from '@/assets/logo.svg'
import { Button } from './button'
import Link from 'next/link'

export function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
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

          <form action="submit" className={styles.form}>
            <strong>Fale conosco</strong>
            <div className={styles.customInputWrapper}>
              <input id="name" type="text" placeholder="Nome" />
              <label htmlFor="name">Nome</label>
            </div>
            <div
              className={`${styles.customInputWrapper} ${styles.textareaMarginTop}`}
            >
              <textarea id="message" placeholder="Escreva sua mensagem" />
              <label htmlFor="message">Escreva sua mensagem</label>
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
