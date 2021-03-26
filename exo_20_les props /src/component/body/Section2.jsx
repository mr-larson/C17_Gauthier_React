import React, { Component } from 'react'

export default class Section2 extends Component {

    render() {
        
        return this.props.nom.map((pres) =>
            <section className="section2 d-flex justify-content-center align-items-center bg-warning">
                <h1>{pres.nom} {pres.prenom}</h1>
            </section>
        )
        
    }
}

