// import styles from './page.module.css'

import { Gallery } from './gallery'
import { Hero } from './hero'

import { starWarsProducts, consolesProducts, miscellaneousProducts } from './db'

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery title="Star Wars" products={starWarsProducts} />
      <Gallery title="Consoles" products={consolesProducts} />
      <Gallery title="Diversos" products={miscellaneousProducts} />
    </>
  )
}
