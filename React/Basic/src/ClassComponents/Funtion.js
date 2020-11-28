import React from 'react';

function Funtion(props) {
    function Click(){
        alert("Hi! Mouse From Clicked Function") 
        
    }
    return (
        <div>
            <button onClick={Click}>MouseClickFun</button>
            <h2>It is a Function Components</h2>
            <h2>I live at {props.Live} and thana {props.Thana}</h2>
        </div>
    );
}

export default Funtion;