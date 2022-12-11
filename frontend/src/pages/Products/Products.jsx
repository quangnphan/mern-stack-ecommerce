import React from 'react'
import PromoBanner from './components/PromoBanner/PromoBanner'
import ShopAndChat from './components/ShopAndChat/ShopAndChat'
import ProductNav from './components/ProductNav/ProductNav'
import CardShelf from './components/CardShelf/CardShelf'

const Products = () => {
  return (
    <div>
      <PromoBanner />
      <ShopAndChat />
      <ProductNav />
      <CardShelf />
    </div>
  )
}

export default Products