import React from 'react'
import Collections from '../components/Collections'
import Info from '../components/Info'
import Shop from '../components/Shop'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <Collections />
        <Info />
        <Shop />
        <Products />
    </div>
  )
}

export default Home