import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Change extends Component {
    constructor(){
        super()
         this.state={
            Work:"Romana learning Web Development"
         }
    }
    Change(a){
        this.setState({Work:a})
    }
    render() {
        return (
            <div>
               <h3>{this.state.Work}</h3>
               <button className="btn btn-outline-info m-4" onClick={this.Change.bind(this,"Rashed learning SearchEngineOptimization")}>ClickChange</button> 
            </div>
        );
    }
}
export default Change;

