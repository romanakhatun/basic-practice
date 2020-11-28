import React, { Component } from 'react';

class Select extends Component {
    constructor() {
        super()
        this.state = {
            food1: "Barker",
            food2: "Chocolate",
            food3: "Potato",
            food4: "Cake",
            food5: "biscuits",
            show: "",
        }
    }
    onchangeh = (event) => {
        var newFood = event.target.value;
        this.setState({ show: newFood, })
    }

    render() {
        return (
            <div>
                <h2>Select Value</h2>
                <p><small>{this.state.show}</small></p>
                <select onClick={this.onchangeh}>
                    <option>{this.state.food1}</option>
                    <option>{this.state.food2}</option>
                    <option>{this.state.food3}</option>
                    <option>{this.state.food4}</option>
                    <option>{this.state.food5}</option>
                </select>
            </div>
        );
    }
}

export default Select;