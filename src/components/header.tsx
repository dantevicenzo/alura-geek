'use client'

import Image from 'next/image'
import styles from './header.module.css'
import logo from '@/assets/logo.svg'
import searchIcon from '@/assets/search-icon.svg'
import { Button } from './button'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Header() {
  const pathname = usePathname()

  return (
    <header className={styles.container}>
      <div className={styles.searchContainer}>
        <Link href="/">
          <Image src={logo} height={50} width={176} alt="" />
        </Link>
        <div className={styles.searchInputContainer}>
          <input
            type="text"
            placeholder="O que deseja encontrar?"
            className={styles.searchInput}
          />
        </div>
      </div>
      {pathname === '/' && (
        <div>
          <Link href="/login">
            <Button variantColor="transparent" variantPadding="md">
              Login
            </Button>
          </Link>
        </div>
      )}

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
