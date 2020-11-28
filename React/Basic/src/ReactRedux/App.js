import React, { useState } from "react";
import Shop from "./components/Redux/Shop";
import Cart from "./components/Redux/Cart";
// import Home from "./components/Home";
// import About from "./About";
// import { createContext } from "react";
// import ReducerCount from "./components/ReducerCount/ReducerCount";
// import PatientManagement from "./components/PatientManagement/PatientManagement";

// export const CategoryContext = createContext()
function App() {
	// const [category, setCategory] = useState(0);
	// let shoppingCart = [
	// 	{ id: 35, item: 'jumper', color: 'red', size: 'medium', price: 20 },
	// 	{ id: 42, item: 'shirt', color: 'blue', size: 'medium', price: 15 },
	// 	{ id: 71, item: 'socks', color: 'black', size: 'all', price: 5 },
	// ]

	return (
		<div>
			{/*
		   <CategoryContext.Provider value={[category, setCategory]} >
				<p>count value:{category}</p>
				<Home></Home>
				<About></About>
			</CategoryContext.Provider>
			<ReducerCount />
			<PatientManagement /> 
		*/}

			<Cart />
			<Shop />

		</div>
	);
}

export default App;








