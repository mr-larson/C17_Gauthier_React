
import React, { Component } from 'react'

export default class Nav extends Component {

    navigation = (destination) => {
        this.props.onNavigation(destination)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <div className="container-fluid">

                    <button onClick={() => this.navigation('accueil')} className="navbar-brand myNav px-3 text-success" href="###">btn1</button>
                    <button onClick={() => this.navigation('heure')} className="navbar-brand myNav px-3 text-success" href="###">btn2</button>
                    <button onClick={() => this.navigation('configuration')} className="navbar-brand myNav px-3 text-success" href="###">btn3</button>
                        
                </div>
            </nav>
        )
    }
}
