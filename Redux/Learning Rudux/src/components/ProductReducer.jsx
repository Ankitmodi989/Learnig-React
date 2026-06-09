import React from 'react'
import { combineReducers, createStore } from 'redux';

import { productlist } from './productList'
import ProReducer from './ProReducer';
import cartReducer, { CART_ADD_ITEM, CART_ITEM_INCREASE_QUANTITY, CART_REMOVE_ITEM } from './cartReducer';
import wishListReducer, { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from './wishListReducer';


const reducer = combineReducers({
    products : ProReducer,
    cartitem: cartReducer,
    wishlist : wishListReducer
})
// const initialstate = {
//     products: productlist,
//     cartitem: [],
//     wishList: [],
// }

// function reducer(state = initialstate, action) {
//     switch (action.type) {
//         case 'cart/additem':
//             return { ...state, cartitem: [...state.cartitem, action.payload] }
//         case 'cart/removeitem':
//             return { ...state, cartitem: state.cartitem.filter((cartitm) => cartitm.productId !== action.payload.productId) }
//         case 'cart/addcount':
//             return {
//                 ...state, cartitem: state.cartitem.map((cartItem) => {
//                     if (cartItem.productId === action.payload.productId) {
//                         return { ...cartItem, count: cartItem.count + 1 }
//                     }
//                     return cartItem;
//                 })
//             }
//         case 'cart/removecount':
//             return {
//                 ...state, cartitem: state.cartitem.map((cartItem) => {
//                     if (cartItem.productId === action.payload.productId) {
//                         return { ...cartItem, count: cartItem.count - 1 }
//                     }
//                     return cartItem
//                 })
//             }
//         case 'cart/addwishlist':
//             if (
//                 state.wishList.some(
//                     item => item.productId === action.payload.productId
//                 )
//             ) {
//                 return state;
//             }
//             return {
//                 ...state,
//                 wishList: [
//                     ...state.wishList,
//                     { productId: action.payload.productId }
//                 ]
//             }
//         case 'cart/removewishlist':
//             return {
//                 ...state, wishList: state.wishList.filter((whishlist) => whishlist.productId !== action.payload.productId
//                 )
//             }
//         default:
//             return state

//     }
// }

const ProductReducer = () => {


    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    console.log(store);

    store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, count: 1 } });
    store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 12, count: 1 } });
    store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 5, count: 1 } });
    store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 7, count: 1 } });
    store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 9, count: 1 } });
    store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 1 } });
    store.dispatch({ type: CART_ITEM_INCREASE_QUANTITY, payload: { productId: 12 } });
    // store.dispatch({ type: CART_ITEM_INCREASE_QUANTITY, payload: { productId: 12 } });
    store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 5 } });
    store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 12 } });
    store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 1 } });
    store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 1 } });



    return (
        <div>productReduce</div>
    )
}

export default ProductReducer