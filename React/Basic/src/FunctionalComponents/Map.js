import React from 'react';

const Map = () => {
    //dataStore
    const laptop = [
        {
            "name": "3M Gold Privacy Filter for 17\" Widescreen Laptop (16:10) (GF170W1B)",
            "img": "https://images-na.ssl-images-amazon.com/images/I/415oziPFA0L._AC_US218_.jpg",
            "price": 68.36,
            "shipping": 7.99
        },
        {
            "name": "Manfrotto MB LF-WN-BP camera & laptop backpack for DSLR Lifestyle Windsor, grey",
            "img": "https://images-na.ssl-images-amazon.com/images/I/51mEVhwXGKL._AC_US218_.jpg",
            "price": 169.88, "shipping": 3.99
        }
    ]
    return (
        <div>
            {/* dataGet from map */}
            {
                laptop.map((lp) => (
                    <Product laptop={lp}></Product>
                ))
            };
        </div>
    );
};

//dataGet form props
const Product = (props) => {
    const { img, name, shipping, price } = props.laptop;

    const productStyle = {
        borderBottom: "1px solid gray",
        textAlign: "center"
    }

    return (
        <div style={productStyle}>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{shipping}</p>
        </div>
    )
}
export default Map;


// import React from 'react';

// const Map = () => {
//     const identity = [
//         { name: 'Romana', Village: "Rampara" },
//         { name: 'Tanika', Village: "Osmanpur" },
//         { name: 'Tasnim', Village: "Rampara" }
//     ]
//     return (
//         <div>
//             {
//                 identity.map(identity => (
//                     <div>
//                         <h2>{identity.name}</h2>
//                         <p>{identity.Village}</p>
//                     </div>
//                 ))
//             };

//         </div>
//     );
// };
// export default Map;
