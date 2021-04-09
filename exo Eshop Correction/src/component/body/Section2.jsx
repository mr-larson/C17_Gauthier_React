import React, { Component } from 'react'

export default class Section2 extends Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
            Produit : {this.props.article.nom} || Unités : 1 
                <button className="btn btn-danger" onClick={this.props.retirer}>Retirer</button>
            </li>
        )
    }
}