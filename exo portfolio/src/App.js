/*-------------- lien JSX --------------*/
import Particles from "react-particles-js"
import Nav from './component/header/Nav'
import Header from './component/header/Header'
import Body from './component/body/Body'
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
        <Body/>
        <Footer/>
    </div>
  )
}


