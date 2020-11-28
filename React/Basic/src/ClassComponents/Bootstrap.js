import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
// import { MDBMask, MDBView } from "mdbreact";
class Bootstrap extends Component {
    constructor() {
        super();
        this.state = {
            Name: "Pinki read in class eight",
        }
    }
    changeName(a) {
        this.setState({ Name: a });
    }

    render() {
        return (
            <div>
                <Spinner animation="grow" variant="danger" />
                <small><button className="btn btn-danger">Going Now</button></small><br /><br />

                <p>{this.state.Name}</p>
                <small><button className="btn btn-warning" style={{ color: "white" }} onClick={this.changeName.bind(this, "Suny read in class nine")}>Change Now</button></small>

                {/* <MDBView hover zoom>
                    <img
                        src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center" overlay="red-slight">
                        <p className="white-text">Super light overlay</p>
                    </MDBMask>
                </MDBView> */}
            </div>
        );
    }
}

export default Bootstrap;