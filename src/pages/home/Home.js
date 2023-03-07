import React from 'react'
import AbaoutQubly from '../../components/aboutQubly/AboutQubly.js'

// components
import  Hero from '../../components/Hero/Hero.js'
import EngTeams from '../../components/productsTeams/EngTeams'
import ProductsTeams from '../../components/productsTeams/ProductsTeams'
import WhyQubly from '../../components/why-Qubly/WhyQubly.js'

function Home() {
  return (
    <div>
      <Hero/>
      <WhyQubly />
      <ProductsTeams />
      <EngTeams/>
      <AbaoutQubly/>
    </div>
  )
}

export default Home
