
import React, { Component } from 'react'

export default class Nav extends Component {
    
    
    render() {

        

        return (
            
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <div className="container-fluid">

                    <button onClick={()=>console.log('accueil')} className="navbar-brand" href="###">Navbar</button>
                        
                </div>
            </nav>
            
        )
    }
}
