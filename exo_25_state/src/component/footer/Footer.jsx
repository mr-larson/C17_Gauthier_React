

import React, { Component } from 'react'

export default class Footer extends Component {

    state = {
        clients:[
            {id: 1, nom:"Shun"},
            {id: 2, nom:"leon"},
            {id: 3, nom:"Saitama"}
        ],
        compteur: 0
    }
    
    handleClick = () => {
        this.state.compteur++
    }

    render() {

        const title = "Titre de la liste"

        const elements = this.state.clients.map(client => (
            <li>{client.nom} <button>X</button></li>
        ))

        return (
            <footer className="bg-primary py-5">

                <h1 className="text-center">{title}</h1>
                <button onClick={this.handleClick}>Click ici</button>

                <div className="d-flex justify-content-around align-items-center py-5">
                    <ul className="bg-danger text-center p-3">
                        {elements}
                    </ul>
                    <form>
                        <input type="text" placeholder="Ajouter un client"/>
                        <button>Confirmer</button>
                    </form>
                </div>


            </footer>
        )
    }
}
