import React, { Component } from 'react'

export default class Formulaire extends Component {

    constructor (props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            email:'',
            message:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    render() {


        return (
            <section id="formulaire" className="container-fluid challenge">
                
                <button type="button" class="contact" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                </button>

                
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel"> Veuillez remplir le formulaire </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-sm-offset-2 col-sm-8">
                                        <label htmlFor="nom" className="px-2" > Entrez votre nom</label>
                                        <input className="mx-4" type="text" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-offset-2 col-sm-8">
                                        <label htmlFor="prenom" className="px-2"> Entrez votre prénom</label>
                                        <input type="text" id="prenom" name="prenom" value={this.state.prenom} onChange={this.handleChange}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-offset-2 col-sm-8">
                                        <label htmlFor="email" className="px-2" > Entrez votre email</label>
                                        <input className="mx-3" type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-offset-2 col-sm-8">
                                        <label htmlFor="message" className="px-2" > Entrez votre message</label>
                                        <textarea className="" type="text" id="message" name="message" cols="30" rows="10" value={this.state.message} onChange={this.handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                <button type="button" class="btn btn-primary">Envoyer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

