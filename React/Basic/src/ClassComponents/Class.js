import React, { Component } from 'react';

class Class extends Component {
    MouseClass(){
        alert("Hi! Mouse From Clicked Class")
    }
 render() {
        return (
            <div>
                <button onClick={this.MouseClass}>MouseClickClass</button>
                <h2>It is a class components</h2>
                <h2>My Mother Name is {this.props.name} and Father Name is {this.props.fathername}</h2> 
            </div>
        );
    }
 }
export default Class;