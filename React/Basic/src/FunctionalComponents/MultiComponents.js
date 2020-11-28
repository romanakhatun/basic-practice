import React, { useState } from 'react';

const MultiComponents = () => {
    const loveName = [ 'time', 'fascinating world', 'attractive garden' ]
    return (
        <div>
            <PassData loveName={loveName[ 0 ]} age="40"></PassData>
            <PassData loveName={loveName[ 1 ]}></PassData>
            <PassData loveName={loveName[ 2 ]}></PassData>
            <PassData loveName="beautiful place"></PassData>

        </div>
    );
};

const PassData = (props) => {
    const passDataStyle = {
        border: '1px solid red',
        marginBottom: '10px',
        padding: '20px'
    }
    return (
        <div style={passDataStyle}>
            <h1>I love {props.loveName}</h1>
            <p>My age is {props.age || 30} years</p>
        </div>
    )
}
export default MultiComponents;