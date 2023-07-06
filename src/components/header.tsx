import Image from 'next/image'
import styles from './header.module.css'
import logo from '@/assets/logo.svg'
import searchIcon from '@/assets/search-icon.svg'
import { Button } from './button'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.searchContainer}>
        <Image src={logo} height={50} width={176} alt="" />
        <div className={styles.searchInputContainer}>
          <input
            type="text"
            placeholder="O que deseja encontrar?"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div>
        <Button variantColor="transparent" variantPadding="md">
          Login
        </Button>
      </div>
      <Image
        src={searchIcon}
        height={24}
        width={24}
        alt=""
        className={styles.searchIcon}
      />
    </header>
  )
}
