/*-------------- lien JSX --------------*/
import Particles from "react-particles-js"
import Nav from './component/header/Nav'
import Header from './component/header/Header'
import Section1 from './component/body/Section1'
import Section2 from './component/body/Section2'
import Section3 from './component/body/Section3'
import MainShop from './component/e-shop/MainShop'
import Footer from './component/footer/Footer'



import React from 'react'

export default function App() {
  return (
    <div>
        <Particles
          params={{
            particles: {
              number: {
                value: 40,
                density:{
                  enable: true,
                  value_area: 500
                }
              }
            }
          }}
        />
        <Nav />
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <MainShop/>
        <Footer/>
    </div>
  )
}


