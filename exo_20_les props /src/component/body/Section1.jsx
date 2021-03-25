import React, { Component } from 'react'

export default class Section1 extends Component {

    currentPage = "heure"

    render() {

        let dateCourante = new Date()
        let tempsJavaScript = dateCourante.getTime()
        let tempsPHP = tempsJavaScript/1000

        return (
            <section>

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
                    Date pour un humain : {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}
                </p>
                }

            </section>
        )
    }
}
