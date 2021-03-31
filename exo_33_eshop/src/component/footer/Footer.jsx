

import React, { Component } from 'react'

export default class Footer extends Component {
    // Tableau initial
    state = {
        clients:[
            
        ],
        newClient: ""
    }
    
    
    
    
    // Ajoute un client au tableau initial
    handleSubmit = () => {
        const nom = this.state.client
        const client = {id: this.i, nom: nom}
        this.i++
        const clients = /* [...this.state.clients] */ this.state.clients.slice()
        clients.push(client)
        this.setState({clients:clients})

    }

    // Supprime un client du tableau
    handleDelete = id => {
        const clients = this.state.clients.slice()
        const index = clients.findIndex(client => client.id === id)
        
        clients.splice(index,1)

        this.setState({ clients: clients})
    }


    render() {

        // event de suppression
        const elements = this.state.clients.map((client) => (
            <li key = {client.id}>{client.nom} <button onClick={() => this.handleDelete(client.id)}>X</button></li>
        ))

        return (
            <section id="section2" className="bg-primary p-5">
                
                <div className="d-flex justify-content-around align-items-center py-5">    
                    <button onClick={this.handleSubmit}>Confirmer</button>
                </div>
                <div className="d-flex justify-content-around align-items-center py-3">
                    <ul className="bg-danger text-center p-3">
                        {elements}
                    </ul>
                </div>
                
            </section>
        )
    }
}
