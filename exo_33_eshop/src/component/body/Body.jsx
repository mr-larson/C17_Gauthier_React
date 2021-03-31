/*-------------- lien JSX --------------*/
import Articles from './Articles'
import Section2 from './Section2'

import React, { Component } from 'react'

export default class Body extends Component {
    
    
    render() {
        const title = "Test Eshop"
        return (
            <section className="container">
                <h1 className="text-center p-4 text-bold bg-warning">{title}</h1>
                <Articles />
                <Section2/>
            </section>
            
        )
    }
}
