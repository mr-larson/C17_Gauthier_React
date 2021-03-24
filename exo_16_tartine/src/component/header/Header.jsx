/*-------------- lien JSX --------------*/
import Nav from './Nav'
import SearchBar from './SearchBar'


import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="myNav container-fluid bg-dark py-4">
                <div className="row">
                    <Nav/>
                    <SearchBar/>
                </div>
            </div>
        )
    }
}
