import React, { useContext } from 'react';
import { CategoryContext } from '../App';

const Home = () => {

	const [category, setCategory] = useContext(CategoryContext);

	return (
		<div style={{ border: "1px solid purple" }}>
			<h2>This is Home:{category}</h2>
			<button onClick={() => setCategory(category + 1)}><a href="#/">Increase</a></button>
			<button onClick={() => setCategory(category + 1)}><a href="#/">Increase</a></button>
			<button onClick={() => setCategory(category + 1)}><a href="#/">Increase</a></button>
		</div>
	);
};

export default Home;