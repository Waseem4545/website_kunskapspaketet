import React, { Component } from 'react';


export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            title: "kunskappaketet project"
        }
    }

    render() {
        return(
        <h3>{this.state.title}</h3>
        )
    }
}

