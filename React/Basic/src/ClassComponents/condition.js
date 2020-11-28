import React, { Component } from 'react';
class condition extends Component {
    constructor(){
        super()
        this.state={
            login:true
        }
    }
    render() {
        return (
                this.state.login?
                (
                <h2>Look,It am true.</h2>
                ) : (
                <h2>Look,It am false.</h2>
                ) 
        );
    }
}

export default condition;