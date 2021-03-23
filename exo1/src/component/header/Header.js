import React, { Component } from 'react'
import Nav from './Nav'
import DemoComponent from '../DemoComponent'

export default class Header extends Component {
    currentPage = "button1"
    render() {
        let dateCourante = new Date()
        let tempsJavaScript = dateCourante.getTime()
        let tempsPHP = tempsJavaScript/1000

        let pageContent
        if(this.currentPage == "button1") {
            pageContent = <DemoComponent/>
        }
        else {
            pageContent = (<div>
                                <p>
                                    Temps JavaScript: {tempsJavaScript} milliseconde
                                </p>
                                <p>
                                    Temps PHP: {tempsPHP} secondes
                                </p>
                                <p>
                                    Date pour un humain: {dateCourante.getDate()}/ {dateCourante.getMonth()}/{dateCourante.getFullYear()}
                                </p>
                            </div>)
        }
        return (
            <div className = "bg-danger container-fluid">
                <Nav />
                {this.contentPage}
                {pageContent}
                
            </div>
        )
    }
}
