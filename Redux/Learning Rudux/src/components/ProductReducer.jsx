import React from 'react'
import { createStore } from 'redux';

import { productlist } from './productList'

const initialstate = {
    products: productlist,
    cartitem: [],
    wishList: [],
}

function reducer(state = initialstate, action) {
    switch (action.type) {
        case 'cart/additem':
            return { ...state, cartitem: [...state.cartitem, action.payload] }
        case 'cart/removeitem':
            return { ...state, cartitem: state.cartitem.filter((cartitm) => cartitm.productId !== action.payload.productId) }
        case 'cart/addcount':
            return {
                ...state, cartitem: state.cartitem.map((cartItem) => {
                    if (cartItem.productId === action.payload.productId) {
                        return { ...cartItem, count: cartItem.count + 1 }
                    }
                    return cartItem;
                })
            }
        case 'cart/removecount':
            return {
                ...state, cartitem: state.cartitem.map((cartItem) => {
                    if (cartItem.productId === action.payload.productId) {
                        return { ...cartItem, count: cartItem.count - 1 }
                    }
                    return cartItem
                })
            }
        case 'cart/addwishlist':
            if (
                state.wishList.some(
                    item => item.productId === action.payload.productId
                )
            ) {
                return state;
            }
            return {
                ...state,
                wishList: [
                    ...state.wishList,
                    { productId: action.payload.productId }
                ]
            }
        case 'cart/removewishlist':
            return {
                ...state, wishList: state.wishList.filter((whishlist) => whishlist.productId !== action.payload.productId
                )
            }
        default:
            return state

    }
}

const ProductReducer = () => {


    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    console.log(store);

    store.dispatch({ type: 'cart/additem', payload: { productId: 1, count: 1 } });
    store.dispatch({ type: 'cart/additem', payload: { productId: 12, count: 1 } });
    store.dispatch({ type: 'cart/additem', payload: { productId: 5, count: 1 } });
    store.dispatch({ type: 'cart/additem', payload: { productId: 7, count: 1 } });
    store.dispatch({ type: 'cart/additem', payload: { productId: 9, count: 1 } });
    store.dispatch({ type: 'cart/removeitem', payload: { productId: 1 } });
    store.dispatch({ type: 'cart/addcount', payload: { productId: 12 } });
    store.dispatch({ type: 'cart/removecount', payload: { productId: 12 } });
    store.dispatch({ type: 'cart/addwishlist', payload: { productId: 5 } });
    store.dispatch({ type: 'cart/addwishlist', payload: { productId: 12 } });
    store.dispatch({ type: 'cart/addwishlist', payload: { productId: 1 } });
    store.dispatch({ type: 'cart/removewishlist', payload: { productId: 1 } });



    return (
        <div>productReduce</div>
    )
}

export default ProductReducer