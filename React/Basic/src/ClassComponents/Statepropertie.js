import React, { Component } from 'react';

class Statepropertie extends Component {
    constructor(){
        super()
        this.state={
            name1:"Romana",
            name2:"Salma",
            name3:"Nanziba",
            name4:"Shirina",
            name5:"Mukta",
            name6:"Sumaiya",
            name7:"Fahmida",
            class:["1","2","5","10"]
        }
    }
    render() {
        return (
            <div>
               <h2> My Madrasha life </h2>
               <h5>My name is {this.state.name1}.I read in class {this.state.class[3]}.My madrasha life was very interesting .My friends was six.They was {this.state.name2 } , {this.state.name3} , {this.state.name4} , {this.state.name5} , {this.state.name6}.Every times love them.They was very good gril.I miss them every times.</h5>
              <h3></h3>
            </div>
        );
    }
}

export default Statepropertie;