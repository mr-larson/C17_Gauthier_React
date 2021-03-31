/*-------------- lien JSX --------------*/
import Articles from './Articles'
import Panier from './Panier'

import React, { Component } from 'react'

export default class Body extends Component {
    
    state = {
        money: 10 
    }
    render() {

        const myMoney =
            <div className="py-3">
                <h3>Mon argent : {this.state.money} €</h3>
            </div>

        return (
            <section className="container">
                {myMoney}
                <Articles />
                <Panier/>
            </section>
            
        )
    }
}
