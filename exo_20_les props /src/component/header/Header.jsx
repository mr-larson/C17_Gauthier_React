/*-------------- lien JSX --------------*/
import Nav from './Nav'


import React, { Component } from 'react'

export default class Header extends Component {

    onNavigationParent = (destination) => {
        this.currentPage = destination;
        console.log(this.currentPage)
    }

    render() {
        return (
            <div>
                <Nav onNavigation={this.onNavigationParent}/>
            </div>
        )
    }
}
