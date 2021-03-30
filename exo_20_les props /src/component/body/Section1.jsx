import React, { Component } from 'react'

export default class Section1 extends Component {

    state = {
        dateCourante : new Date()
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                dateCourante : new Date()
            })
        }, 1000)
    }
    // Variable qui présente diffèrente heures
    render() {
 
        let tempsJavaScript = this.state.dateCourante.getTime()
        let tempsPHP = tempsJavaScript/1000

        return (
            //declaration des diffèrentes heures en fonction du format
            <section className = "section1 d-flex justify-content-center align-items-center bg-success">
                
                { this.props.format === "jsTime" &&
                    <p>
                        Temps javascript : {tempsJavaScript} millisecondes
                    </p>
                }

                { this.props.format === "phpTime" &&
                    <p>
                        Temps PHP : {tempsPHP} secondes
                    </p>
                }

                { this.props.format === "humanTime" &&
                    <p>
                        Date pour un humain : {this.state.dateCourante.getDate()}/{this.state.dateCourante.getMonth()+1}/{this.state.dateCourante.getFullYear()}/ <hr/> {this.state.dateCourante.getSeconds()}S/ {this.state.dateCourante.getMinutes()}M/{this.state.dateCourante.getHours()}H
                    </p>
                }

            </section>
        )
    }
}
