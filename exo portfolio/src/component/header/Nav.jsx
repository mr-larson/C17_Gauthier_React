
import React from 'react'

export default function Nav() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="###"> <img className="img-fluid" src="./img/gpc-logo.png" alt="green logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="###">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="###">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="section2">Lastest projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="###">Shopify</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="###">Contact me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
