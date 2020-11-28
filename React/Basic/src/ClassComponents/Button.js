import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const TestButton=(a)=>{
    alert(a)
}

const Button = () => {
    return (
        <div>
            <h2>Please!See You.It is attarctive button.</h2>
            <button onClick={TestButton.bind(this,"I Saw you.Trust me.It is very interesting")} className="btn btn-lg m-2 border-danger">ButtonClick</button>
            <button className="btn btn-danger bg-fuchsia m-3">Hi!Arrow</button>
            <button className="btn btn-outline-secondary ">Hi!Romana</button>
            <button className="m-2 btn-outline-secondary  badge-danger p-1">Hi!Saiyan</button>
        </div>
    );
};

export default Button;





