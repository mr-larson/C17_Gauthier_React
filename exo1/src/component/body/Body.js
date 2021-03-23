import React, { Component } from 'react'
import "./Body.css"

export default class Body extends Component {
    render() {
        return (
            <section id="section1" class="container my-5"> 
            <div className="row">
                <div className="col myH bg-secondary text-white m-auto p-3 mt-4">
                    <h2 className="m-auto p-2">
                       Class <span className="app text-warning">App</span> extends Compenent 
                    </h2>
                    <div className="col myH bg-info text-white m-auto p-3">
                        <h3 className="m-auto p-2">
                            render () 
                        </h3>
                        <div className="col myH bg-primary text-white m-auto p-3">
                            <h4 className="m-auto p-2">
                                return (
                            </h4>
                            <ul className="col m-auto text-danger">
                                <li className="myli col bg-white m-1 p-2">Menu/
                                    <ul>
                                        <li className="smallli col text-center bg-success m-1">Logo/</li>
                                        <li className="smallli col text-center bg-success m-1">Nav/</li>
                                    </ul>
                                </li>
                                <li className="myli col bg-white m-1 p-2">Aside/</li>
                                <li className="myli col bg-white m-1 p-2">Article/</li>
                                <li className="myli col bg-white m-1 p-2">Footer</li>
                            </ul>
                            <span></span>
                        </div>
                        <span></span>
                    </div>
                    <span></span>
                </div>
            </div>
        </section>
        )
    }
}
