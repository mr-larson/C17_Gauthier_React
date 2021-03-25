/*-------------- lien JSX --------------*/
import Header from './component/header/Header'
import Body from './component/body/Body'
import Footer from './component/footer/Footer'



import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

