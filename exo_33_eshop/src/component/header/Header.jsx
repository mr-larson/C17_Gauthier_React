/*-------------- lien JSX --------------*/
import Nav from './Nav'


import React, { Component } from 'react'

export default class Header extends Component {
    render() {

        const title = 
        <div>
            <h1 className="text-center py-4 text-bold bg-warning"> test Eshop</h1>
        </div>

        return (
            <header>
                <Nav/>
                {title}
            </header>
        )
    }
}
