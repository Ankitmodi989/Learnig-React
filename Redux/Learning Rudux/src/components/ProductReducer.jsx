import React from 'react'
import { combineReducers, createStore } from 'redux';

import { productlist } from './productList'
import ProReducer from './ProReducer';
import cartReducer, { addCartItem, decreaseCartItemQuantity, increaseCartItemQuantity } from './cartReducer';
import wishListReducer, { addWishListItem, removeWishListItem } from './wishListReducer';

// function combineReducers(reducers) {
//   const reducerKeys = Object.keys(reducers)

//   return function (state = {}, action) {
//     const nextState = {}

//     for (let i = 0; i < reducerKeys.length; i++) {
//       const key = reducerKeys[i]
//       const reducer = reducers[key]
//       const previousStateForKey = state[key]
//       const nextStateForKey = reducer(previousStateForKey, action)
//       nextState[key] = nextStateForKey
//     }

//     return nextState
//   }
// }

const reducer = combineReducers({
    products: ProReducer,
    cartitem: cartReducer,
    wishlist: wishListReducer
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

    store.dispatch(addCartItem(1))
    store.dispatch(addCartItem(12))

    store.dispatch(increaseCartItemQuantity(12))

    store.dispatch(decreaseCartItemQuantity(12))
    store.dispatch(decreaseCartItemQuantity(12))

    store.dispatch(addWishListItem(18))
    store.dispatch(addWishListItem(11))

    store.dispatch(removeWishListItem(11))
    store.dispatch(removeWishListItem(18))


    return (
        <div>productReduce</div>
    )
}

export default ProductReducer