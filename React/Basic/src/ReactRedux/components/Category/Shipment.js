import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h2>This is Shipment:{category}</h2>
            <button onClick={() => setCategory(category + 1)}><a href="#/">Increase</a></button>
        </div>
    );
};

export default Shipment;