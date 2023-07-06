import { Gallery } from './gallery'
import { Hero } from './hero'

import { products } from './db'

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery
        title="Star Wars"
        products={products.filter(
          (product) => product.category === 'Star Wars',
        )}
      />
      <Gallery
        title="Consoles"
        products={products.filter((product) => product.category === 'Consoles')}
      />
      <Gallery
        title="Diversos"
        products={products.filter((product) => product.category === 'Diversos')}
      />
    </>
  )
}
