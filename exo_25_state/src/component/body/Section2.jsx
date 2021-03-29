import React, { Component } from 'react'

export default class Section2 extends Component {

    render() {
        console.log(this.props.nom);
        return this.props.nom.map((pres) =>
            
            <section key={pres.id}>
                <div> {pres.nom} {pres.prenom} {pres.age}ans</div>
            </section>
        
        )
    }
}