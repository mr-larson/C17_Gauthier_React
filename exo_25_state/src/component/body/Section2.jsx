import React, { Component } from 'react'

export default class Section2 extends Component {
    render() {
        return this.props.nom.map((pres) =>
            <section>
                <div key={pres.id}> {pres.nom} {pres.prenom} {pres.age}ans</div>
            </section>
        )
    }
}