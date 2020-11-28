import React, { Component } from 'react';
class From extends Component {
  constructor(){
      super()
      this.state={
          name:""
      }
  }
  onchangehandelar=(event)=>{
      var newName=event.target.value;
      this.setState({name:newName});
  }

    render() {
        return (
            <div>
               <form>
                <h2>Your Frist From:</h2>
                <h6>{this.state.name}</h6>
                <input onChange={this.onchangehandelar} type="text" placeholder="Your Frist Name"/>
                <input type="submit"/>
              </form> 
            </div>
        );
    }
}

export default From;




