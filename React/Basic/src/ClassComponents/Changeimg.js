import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
class Changeimg extends Component {
    imgHandler() {
        let imgCatch = document.getElementById("imgId")
        ReactDOM.findDOMNode(imgCatch).src = { img2 }
    }
    render() {
        return (
            <div>
                <img id="imgId" src={img1} /><br /><br />
                <small><button onClick={this.imgHandler}>Change img</button></small>
            </div>
        );
    }
}

export default Changeimg;





import React, { Fragment } from 'react';

function ListItem({ item }) {
    return (
        <Fragment>
            <tr>{item.term}</tr>
            <tr>{item.description}</tr>
        </Fragment>
    );
}

function Glossary(props) {
    return (
        <table>
            {props.items.map(item => (
                <ListItem item={item} key={item.id} />
            ))}
        </table>
    );
}
export default Glossary;

