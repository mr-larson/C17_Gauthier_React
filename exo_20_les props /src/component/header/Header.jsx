/*-------------- lien JSX --------------*/
import Nav from './Nav'
/*-------------- lien JSX --------------*/
import Section1 from '../body/Section1'
import Section2 from '../body/Section2'


import React, { Component } from 'react'

export default class Header extends Component {

    currentPage ="heure"

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
                    <div>
                        <Section1 format={this.state.formatTime}/>
                        <button onClick={() => this.handleClick('jsTime')}>JavaScript</button>
                        <button onClick={() => this.handleClick('phpTime')}>PHP</button>
                        <button onClick={() => this.handleClick('humanTime')}>Humain</button>
                    </div>
                }

            </header>
        )
    }
}
