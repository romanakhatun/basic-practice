import React, { Component } from 'react';

class Fullfrom extends Component {
    constructor(){
        super()
        this.state={
            username:""
        }
    }
  onchangehandelar=(event)=>{
        var newName=event.target.name;
        var myvalue=event.target.value;
        this.setState({[newName]:myvalue});
    }
  onSubmithandelar=()=>{
        alert(this.state.username)
    }
    render() {
        return (
            <div>
               <form onSubmit={this.onSubmithandelar}>
                    <h2>Your Secound From:</h2>
                    <h6>{this.state.username}</h6>
                     <input name="username" onChange={this.onchangehandelar} type="text" placeholder="Your Secound Name"/>
                     <input type="submit"/><br/><br/>
              </form>
            </div>
        );
    }
}

export default Fullfrom;