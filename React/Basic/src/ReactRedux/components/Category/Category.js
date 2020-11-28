import React from 'react';
// import CategoryDetail from '../CategoryDetail/CategoryDetail';
import Shipment from './Shipment';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Categories = () => {
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h3>Select Your Categories:{category}</h3>
            {/* <CategoryDetail count={count} /> */}
            <Shipment />
        </div>
    );
};

export default Categories;