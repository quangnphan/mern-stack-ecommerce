import React from 'react'
import PromoBanner from './components/PromoBanner/PromoBanner'
import ShopAndChat from './components/ShopAndChat/ShopAndChat'
import ProductNav from './components/ProductNav/ProductNav'
import CardShelf from './components/CardShelf/CardShelf'
import { Container } from '@mui/system'

const Products = () => {
  return (
    <Container maxWidth="lg">
      <PromoBanner />
      <ShopAndChat />
      <ProductNav />
      <CardShelf />
      </Container>
  )
}

export default Products