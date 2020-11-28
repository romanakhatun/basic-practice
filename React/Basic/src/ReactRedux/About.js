import React, { useContext } from 'react';
import Category from './components/Category/Category';
import { CategoryContext } from './App';

const About = (props) => {
	// const { count } = props;
	const [category, setCategory] = useContext(CategoryContext);
	return (
		<div>
			{/* <h2>This is About:{count}</h2> */}
			<h2>This is About:{category}</h2>
			<Category />
		</div>
	);
};

export default About;