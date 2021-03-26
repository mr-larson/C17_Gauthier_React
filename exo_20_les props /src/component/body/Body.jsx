/*-------------- lien JSX --------------*/
import Section2 from '../body/Section2'

import React, { Component } from 'react'

export default class Body extends Component {

    state = {
        presentation: [
            {
                nom: "San",
                prenom: "Goku",
                age: "20",
                ville: "Kame House"
            },
            {
                nom: "Skywalker",
                prenom: "Luke",
                age: "30",
                ville: "Dagobah"
            },
            {
                nom: "McClane",
                prenom: "John",
                age: "40",
                ville: "New York"
            }
        ]
    }

    render() {
        
        return (
            
            <div>
                <Section2 nom = {this.state.presentation}/>
            </div>
        )
    }
}
