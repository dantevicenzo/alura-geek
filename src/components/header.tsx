'use client'

import Image from 'next/image'
import styles from './header.module.css'
import logo from '@/assets/logo.svg'
import searchIcon from '@/assets/search-icon.svg'
import { Button } from './button'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { IProduct } from '@/app/gallery'

export function Header() {
  const pathname = usePathname()
  const products = useLocalStorage()
  const [suggestList, setSuggestList] = useState<IProduct[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value
    setSearchTerm(newSearchTerm)
    console.log(newSearchTerm)
    const newSuggestList = products.filter(
      (product) =>
        product.name.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(newSearchTerm.toLowerCase()),
    )
    console.log(newSuggestList)
    setSuggestList(newSuggestList)
  }

  return (
    <header className={styles.container}>
      <div className={styles.searchContainer}>
        <Link href="/">
          <Image src={logo} height={50} width={176} alt="" />
        </Link>
        <div className={styles.searchInputContainer}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="O que deseja encontrar?"
            className={styles.searchInput}
          />
          {suggestList.length > 0 && searchTerm !== '' && (
            <ul className={styles.suggest}>
              {suggestList.map((suggest, index) => (
                <Link key={index} href={`/products/${suggest.id}`}>
                  <li>{suggest.name}</li>
                </Link>
              ))}
            </ul>
          )}
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

      {pathname === '/products/add' && (
        <div>
          <Link href="/products">
            <Button variantColor="transparent" variantPadding="sm">
              Menu administrador
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
