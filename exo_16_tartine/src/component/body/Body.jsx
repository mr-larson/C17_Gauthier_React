

import React, { Component } from 'react'
import Article from './Article'

export default class Body extends Component {

    nombreArticle = 2

    render() {
        let currentPage

        if (this.nombreArticle >=2) {
            currentPage = 
            <div>
                <Article title = "Nicky Larson" img = "./img/nicky.jpg"/> 
                <Article title = "Gauthier" img = "./img/téléchargement.png"/>
            </div>
        }
        else{
            currentPage = <h1> il n'y a pas d'article</h1>
        }
        return (
            <div class="myBody container-fluid bg-dark p-4">
                {currentPage}
            </div>
        )
    }
}
