import React, { Component } from 'react'

export default class Panier extends Component {

    // Tableau de mon panier
    state = {
        commandes:[
            {id:1, nom:"pure"}
        ]
    }

    // Supprime un article du tableau commandes
    handleDelete = id => {
        const commandes = this.state.commandes.slice()
        const index = commandes.findIndex(commande => commande.id === id)
        
        commandes.splice(index,1)
        this.setState({ commandes: commandes})
    }

    // Ajoute un article au tableau initial
    handleSubmit = () => {
        const nom = this.state.newArticle
        const article = {id: this.i, nom: nom}
        this.i++
        const articles =  [...this.state.articles]
        articles.push(article)
        this.setState({articles:articles})

    }

    render() {

        // event de suppression
        const panier = this.state.commandes.map((commande) => (
            <li key = {commande.id}>{commande.nom} <button onClick={() => this.handleDelete(commande.id)} className="btn bg-danger text-white">Rendre</button></li>
        ))

        

        return (

            //structure de la box mon panier
            <div className="py-3">
                <h3>Mon panier :</h3>
                <ul className="bg-secondary text-center p-3">
                    {panier}
                </ul>
            </div>
        )
    }
}
