// function circumference(y) {
//     if (Number.isNaN(Number.parseFloat(y))) {
//         return 0;
//     }
//     return parseFloat(y) * .1 * Math.PI;
// }

// console.log(circumference('4.7a'));

const Identity = {
    name: "Romana",
    address: {
        street: "Rampara",
        District: "Dinajpur"
    }
};

Object.freeze(Identity);

console.log(Identity.address.District)


