import React, { Component } from 'react'

export default class Section2 extends Component {

    // Tableau initial
    state = {
        clients:[
            
        ],
        newClient: ""
    }
    i = this.state.clients.length+1
    
    // Permet de rentrer un nouveau client dans l'input
    handleChange = (event) => {
        const value = event.currentTarget.value
        this.setState({newClient: value})
    }
    
    // Ajoute un client au tableau initial
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
    
        const nom = this.state.newClient
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
        //ajout d'un titre
        const title = "Titre"

        // event de suppression
        const elements = this.state.clients.map((client) => (
            <li key = {client.id}>{client.nom} <button onClick={() => this.handleDelete(client.id)}>X</button></li>
        ))

        return (
            <section id="section2" className="bg-primary p-5">

                <div className="border-bottom border-dark mx-5">
                    <h1 className="text-center">{title}</h1>
                </div>
                
                <div className="d-flex justify-content-around align-items-center py-5">
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.newClient} onChange={this.handleChange} type="text" placeholder="Ajouter un client"/>
                        <button>Confirmer</button>
                    </form>
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