/*-------------- lien JSX --------------*/
import Nav from './component/header/Nav'
import Header from './component/header/Header'
import Section1 from './component/body/Section1'
import Section2 from './component/body/Section2'
import Section3 from './component/body/Section3'
import Footer from './component/footer/Footer'

import React from 'react'

export default function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </div>
  )
}

