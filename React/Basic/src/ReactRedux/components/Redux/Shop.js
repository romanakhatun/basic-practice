import React from 'react';
import Product from './Product';
import { addToCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
    const { products, addToCart } = props
    return (
        <div>
            <h2>This is Shop House</h2>
            {
                products.map(pd => <Product
                    product={pd}
                    key={pd.id}
                    addToCart={addToCart}
                ></Product>)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products

    }

}
const dispatchToCart = {
    addToCart: addToCart
}

export default connect(mapStateToProps, dispatchToCart)(Shop);