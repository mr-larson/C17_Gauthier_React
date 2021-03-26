import React, { Component } from 'react'

export default class Section1 extends Component {

    currentPage = "heure"
    // Variable qui présente diffèrente heures
    render() {

        let dateCourante = new Date()
        let tempsJavaScript = dateCourante.getTime()
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
                    Date pour un humain : {dateCourante.getDate()}/{dateCourante.getMonth()+1}/{dateCourante.getFullYear()}
                </p>
                }

            </section>
        )
    }
}
