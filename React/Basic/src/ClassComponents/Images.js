import React, { Component } from 'react';
import ReactDOM from'react-dom'
import img from './IMAGES/img.jpg'
import images from'./IMAGES/images.jpg'
import img3 from './IMAGES/img3.jpg'
class Images extends Component {
  changeimg(){
    var imgid = document.getElementById("imgid");
    ReactDOM.findDOMNode(imgid).src={img3}
   }
    render() {
        return (
            <div>
               <img src={img} alt="myimg"/>
                <h2>Button is clicked, Change is images</h2>
                <img id="imgid"src={images}/><br/>
                
                <button onClick={this.changeimg}>ImageChange</button>
            </div>
        );
    }
}

export default Images;