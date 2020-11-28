import React from 'react';
import "./Cardcom.css"
function Cardcom() {
    const friends = ['Mina', 'Rina', 'Bina', 'Dina']
    const cityes = [
        { name: 'America' },
        { name: 'Australlia' },
        { name: 'Asia' },
        { name: 'Endia' }
    ]
    return (
        <div>
            <ul>
                {
                    friends.map(friend => <li>{friend}</li>)
                }
                {
                    cityes.map(city => <li> {city.name}</li>)
                }
                {/*<li>{friends[0]}</li> */}
                {

                }
            </ul>
        </div>
    );
}
// function Cityes(props) {
//         const {name}=props.city
//     return (
//         <div className="productCell">

//         </div>
//     )
// }

export default Cardcom;