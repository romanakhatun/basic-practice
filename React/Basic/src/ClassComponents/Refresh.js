import React, { Component } from 'react';

class Refresh extends Component {
    constructor() {
        super()
        this.refreshButton = this.refreshButton.bind(this);
    }

    refreshButton() {
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <small><button onClick={this.refreshButton}>Refresh</button></small>
                <p>{Math.random()}</p>
            </div>
        );
    }
}

export default Refresh;