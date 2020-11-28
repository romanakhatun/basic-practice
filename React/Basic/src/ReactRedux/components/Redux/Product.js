import React from 'react';

const Product = (props) => {
    const { product, addToCart } = props
    return (
        <div style={{ border: "1px solid tomato", marginTop: "5px" }}>
            <p>{product.name}</p>
            <button onClick={() => addToCart(product.id, product.name)}>Add to cart</button>
        </div>
    );
};

export default Product;