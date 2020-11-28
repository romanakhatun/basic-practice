import React, { Component } from 'react';
class Jesonlist extends Component { 
    render() {
        const mySisterlist=[
            {
                name:"Mitu",
                class:"09"
            },
            {
                name:"Shirin",
                class:"1st Year"
            },
            {
                name:"Sabina",
                class:"2st Year"
            },
            {
                name:"Death Tamanna",
                class:"02"
            }
        ]
    const sisterItems=mySisterlist.map((sitername)=>{
        return<option>{sitername.name}</option>
        }
        )
    const classitem=mySisterlist.map((siterclass)=>{
            return<option>{siterclass.class}</option>
            }
            )
        return (
            <div>
               <select>{sisterItems}</select> 
               <select>{classitem}</select>
            </div>
        );
    }
}

export default Jesonlist;