import React, { Component } from 'react'
import "./nav.css"

export default class Nav extends Component {

    myButton = (destination) => {
        console.log('navigation vers' + destination);
        
    }

    render() {
        return (
            <nav className="bgtitle bg-white container-fluid sticky-top z-index-1"> 
                <div class="col title text-center py-3">
                    <h1>
                        Découvert React
                    </h1>
                    <button className="btn mx-2" onClick={() => this.myButton('button1')}>button1</button>
                    <button className="btn mx-2">button2</button>
                    <button className="btn mx-2">button3</button>
                </div>
            </nav>
        )
    }
}
