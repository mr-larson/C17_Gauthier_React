/*-------------- lien JSX --------------*/
import Section1 from './Section1'
import Section2 from './Section2'

import React, { Component } from 'react'

export default class Body extends Component {

    state = {
        presentation: [
            {
                nom: "San",
                prenom: "Goku",
                age: "20"
            },
            {
                nom: "Skywalker",
                prenom: "Luke",
                age: "30"
            },
            {
                nom: "McClane",
                prenom: "John",
                age: "40"
            }
        ]
    }

    render() {
        return (
            <div>
                <Section1/>
                <Section2 nom = {this.state.presentation}/>
            </div>
        )
    }
}
