import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="col text-white d-flex justify-content-end">
                <span className="mx-3 d-flex align-items-center">search: </span>
                <input type="text" className="myinput"/>
                <button className="mybtn bg-success mx-2">Go</button>
            </div>
        )
    }
}
