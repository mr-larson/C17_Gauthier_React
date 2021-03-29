/*-------------- lien JSX --------------*/
import Nav from './Nav'
state = {
    presentation: [
        {
            id: 1,
            nom: "San",
            prenom: "Goku"
        },
        {
            id: 2,
            nom: "Skywalker",
            prenom: "Anakin"
        },
        {
            id: 3,
            nom: "McClane",
            prenom: "John"
        },
        {
            id: 4,
            nom: "Ozhora",
            prenom: "Tsubasa"
        },
        {
            id: 5,
            nom: "Onizuka",
            prenom: "Eikichi"
        }
    ]
}

import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <Nav/>
            </header>
        )
    }
}
