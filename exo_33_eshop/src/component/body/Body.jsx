/*-------------- lien JSX --------------*/
import Section1 from './Section1'
import Section2 from './Section2'

import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div>
                <Section1/>
                <Section2/>
            </div>
        )
    }
}
