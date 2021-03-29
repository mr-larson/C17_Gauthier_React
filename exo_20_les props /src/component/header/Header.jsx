/*-------------- lien JSX Header--------------*/
import Nav from './Nav'
/*-------------- lien JSX  Body--------------*/
import Section1 from '../body/Section1'
import Section2 from '../body/Section2'


import React, { Component } from 'react'

export default class Header extends Component {

    currentPage = "heure"

    state = {
        formatTime : "phpTime"
    }

    onNavigationParent = (destination) => {
        this.currentPage = destination;
        console.log(this.currentPage)
    }

    handleClick = (format) => {
        console.log(format);
        this.setState({
            formatTime : format
        })
    }

    render() {
        return (
            <header className = "App-header">
                <Nav onNavigation={this.onNavigationParent}/>
                {this.currentPage}

                {this.currentPage == "accueil" &&
                    <Section2/>
                }
                {this.currentPage == "heure" &&
                    <div className = "d-flex justify-content-around align-items-end bg-primary pb-4">
                        <Section1 format={this.state.formatTime}/>
                        <button onClick={() => this.handleClick('jsTime')} className = "myNav px-3 text-bold">JavaScript</button>
                        <button onClick={() => this.handleClick('phpTime')} className = "myNav px-3 text-bold">PHP</button>
                        <button onClick={() => this.handleClick('humanTime')} className = "myNav px-3 text-bold">Humain</button>
                    </div>
                }

            </header>
        )
    }
}
