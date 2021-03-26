
import React, { Component } from 'react'

export default class Nav extends Component {

    navigation = (destination) => {
        this.props.onNavigation(destination)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <div className="container-fluid">

                    <button onClick={() => this.navigation('accueil')} className="navbar-brand myNav px-3 text-success">Accueil</button>
                    <button onClick={() => this.navigation('heure')} className="navbar-brand myNav px-3 text-success">Heure</button>
                    <button onClick={() => this.navigation('configuration')} className="navbar-brand myNav px-3 text-success">Configuration</button>
                        
                </div>
            </nav>
        )
    }
}
