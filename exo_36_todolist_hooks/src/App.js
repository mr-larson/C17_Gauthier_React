/*-------------- lien JSX --------------*/
import Header from './component/header/Header'
import Body from './component/body/Body'
import Footer from './component/footer/Footer'

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    presentation : [
      {
        nom: ""
      }
    ]
  }

  render() {

    // inclus variables et if, for, forEach

    return (

      //inclus if et ADD vr2

      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}
