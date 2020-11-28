import React, { Component } from 'react';

class State1 extends Component {
    // constructor() {
    //     super();
    //     var object = {
    //         text: "Contrary to popular belief"
    //     }
    //     this.state = object;
    // }
    constructor() {
        super();
        this.state = {
            name: "Mina",
            school: "primary school",
            class: {
                class1: "3",
                class2: "4",
                class3: ["5", "6", "7", "8"]
            }
        }
    }
    render() {
        return (
            <div>
                {/* <p>{this.state.text}</p> */}
                <p style={{ color: "coral", fontSize: "20px" }}>{this.state.name} is good gril.She everyday goes to {this.state.school}.She read in {this.state.class.class3[2]} ---State---</p>

            </div>
        );
    }
}

export default State1;