/*-------------- lien JSX --------------*/
import Section2 from '../body/Section2'

import React, { Component } from 'react'

export default class Body extends Component {

    state = {
        presentation: [
            {
                id: 1,
                nom: "San",
                prenom: "Goku",
                age: "20",
                ville: "Kame House"
            },
            {
                id: 2,
                nom: "Skywalker",
                prenom: "Luke",
                age: "30",
                ville: "Dagobah"
            },
            {
                id: 3,
                nom: "McClane",
                prenom: "John",
                age: "40",
                ville: "New York"
            }
        ]
    }

    change = () =>{
        this.setState({
            presentation: [
                {
                    id: 1,
                    nom: "San",
                    prenom: "Gohan",
                    age: "20",
                    ville: "Kame House"
                },
                {
                    id: 2,
                    nom: "Skywalker",
                    prenom: "Anakin",
                    age: "30",
                    ville: "Dagobah"
                },
                {
                    id: 3,
                    nom: "McClane",
                    prenom: "Thomas",
                    age: "40",
                    ville: "New York"
                }
            ]
        })
    }
    render() {
        
        return (
            
            <div>
                <Section2 nom = {this.state.presentation}/>
                <button onClick ={this.change}> click here</button>
            </div>
        )
    }
}
