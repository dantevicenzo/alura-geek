import { Gallery } from './gallery'
import { Hero } from './hero'

import { products } from './db'

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery
        id="starWars"
        title="Star Wars"
        products={products.filter(
          (product) => product.category === 'Star Wars',
        )}
      />
      <Gallery
        id="consoles"
        title="Consoles"
        products={products.filter((product) => product.category === 'Consoles')}
      />
      <Gallery
        id="diversos"
        title="Diversos"
        products={products.filter((product) => product.category === 'Diversos')}
      />
    </>
  )
}
