

import React, { Component } from 'react'
import Article from './Article'

export default class Body extends Component {

    nombreArticles = (nbrarticle) => {
        console.log(nbrarticle);
    }

    render() {

        return (
            <div className="myBody container-fluid bg-dark p-4">
                <Article title = "Nicky Larson" giveNombreArticle={(x) => this.nombreArticles(1)} img = "./img/nicky.jpg"/> 
                <Article title = "Gauthier" giveNombreArticle={(x) => this.nombreArticles(2)} img = "./img/téléchargement.png"/>
            </div>
        )

        
    }
}
