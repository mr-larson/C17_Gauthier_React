/*-------------- lien JSX --------------*/
import Section1 from './Section1'
import Section2 from './Section2'

import React, { Component } from 'react'

export default class Body extends Component {

    state = {
        presentation: [
            {
                id: 1,
                nom: "San",
                prenom: "Goku",
                age: "20"
            },
            {
                id: 2,
                nom: "Skywalker",
                prenom: "Anakin",
                age: "30"
            },
            {
                id: 3,
                nom: "McClane",
                prenom: "John",
                age: "40"
            }
        ]
    }

    rajeunir = () => {
        const nvState = this.state.presentation.map((perso)=>{
            perso.age -=5
            return perso.age
        })
        this.setState({
            nvState
        })
    }

    render() {

        
        return (
            <div className="d-flex justify-content-center align-items-center bg-warning py-5">
                <Section1/>
                <Section2 nom = {this.state.presentation}/>
                <button onClick={this.rajeunir}>Rajeunir</button>
            </div>
        )
    }
}
