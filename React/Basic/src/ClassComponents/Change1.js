import React, { Component } from 'react';
import ReactDOM from'react-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Change1 extends Component {

changeSila(){
    var container=document.getElementById("fun");
    var element=<h2>Hi!Sila,Look I am change methood  </h2>
    var callback=function(){
        alert("Hi!sila I am callbak");
    }
    ReactDOM.render(element,container,callback);
}
    render() {
        return (
            <div>
                 <h2 id="fun">Click the button,Change the methood</h2>
                <button className="badge-pill btn-warning" onClick={this.changeSila}>Hi!Sila</button>
            </div>
        );
    }
}

export default Change1;