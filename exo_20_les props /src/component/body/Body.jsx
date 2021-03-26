/*-------------- lien JSX --------------*/
import Section1 from './Section1'
import Section2 from './Section2'

import React, { Component } from 'react'

export default class Body extends Component {

    state = {
        presentation: [
            {
                nom: "san",
                prenom: "goku"
            },
            {
                nom: "skywalker",
                prenom: "luke"
            },
            {
                nom: "nash",
                prenom: "kevin"
            }
        ]
    }

    render() {
        
        return (
            //selon le format l'heure sera adapter à la sélection de cette dernière
            <div>
                <Section1 format = "humanTime"/>
                <Section2 nom = {this.state.presentation}/>
            </div>
        )
    }
}
