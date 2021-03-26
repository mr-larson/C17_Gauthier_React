
import React, { Component } from 'react'

export default class Nav extends Component {
    
    render() {
        return (
            <div className="col">
                <button onClick={()=>console.log('accueil')} className="mybtn bg-success mx-2 p-1" >link1</button>
                <button onMouseOver={()=>console.log('galerie')} className="mybtn bg-success mx-2 p-1">link2</button>
                <button onDoubleClick={()=>console.log('contact')} className="mybtn bg-success mx-2 p-1">link3</button>
            </div>
        )
    }
}
