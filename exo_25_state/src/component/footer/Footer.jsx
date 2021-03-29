

import React, { Component } from 'react'
import reactDom from 'react-dom'

export default class Footer extends Component {

    clientInput = React.createRef()


    // Tableau initial
    state = {
        clients:[
            {id: 1, nom:"Shun"},
            {id: 2, nom:"leon"},
            {id: 3, nom:"Saitama"}
        ],
        
    }
    i = 4

    // Ajoute un client au tableau initial
    handleSubmit = (event) => {
        event.preventDefault()
        const ajout = this.state.clients.slice()
        ajout.push({id: this.i, nom:(this.clientInput.current.value)})
        this.i++

        this.setState({clients: ajout})
    }

    // Supprime un client du tableau
    handleDelete = id => {
        const clients = this.state.clients.slice()
        const index = clients.findIndex(client => client.id === id)
        
        clients.splice(index,1)

        this.setState({ clients: clients})
    }

    

    render() {
        //ajout d'un titre
        const title = "Titre de la liste"

        // event de suppression
        const elements = this.state.clients.map(client => (
            <li>{client.nom} <button onClick={() => this.handleDelete(client.id)}>X</button></li>
        ))

        return (
            <footer className="bg-primary p-5">

                <h1 className="text-center">{title}</h1>
                

                <div className="d-flex justify-content-around align-items-center py-5">
                    <ul className="bg-danger text-center p-3">
                        {elements}
                    </ul>
                    <form onSubmit={this.handleSubmit}>
                        <input ref={this.clientInput} type="text" placeholder="Ajouter un client"/>
                        <button>Confirmer</button>
                    </form>
                </div>


            </footer>
        )
    }
}
