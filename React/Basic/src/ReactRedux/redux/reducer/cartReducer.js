import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions"

const initialState = {
    cart: [],
    products: [
        { name: "Lenovo laptop", id: 1 },
        { name: "Asus laptop", id: 2 },
        { name: "HP laptop", id: 3 },
        { name: "Dell laptop", id: 4 },
        { name: "Toshiba laptop", id: 5 }]
}

const cartReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TO_CART:

            const addItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1

            }
            console.log(addItem)
            const addCart = [...state.cart, addItem]
            return { ...state, cart: addCart };


        case REMOVE_FROM_CART:
            const removeId = action.id;
            const removeCart = state.cart.filter(item => item.cartId !== removeId);
            return { ...state, cart: removeCart }

        default:
            return state
    }
}

export default cartReducer;