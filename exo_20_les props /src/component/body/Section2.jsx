import React, { Component } from 'react'

export default class Section2 extends Component {

    

    render() {
        
        return this.props.nom.map((pres) =>
            <section className="section2 d-flex justify-content-center align-items-center bg-warning">
                <h1> je m'appelle {pres.prenom} {pres.nom} <h2> j'ai {pres.age} ans</h2> <h3>j'habite {pres.ville}</h3></h1>
            </section>
        )
        
    }
}

