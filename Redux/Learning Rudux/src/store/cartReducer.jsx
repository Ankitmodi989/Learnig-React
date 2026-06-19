import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

// // Action type 
// const CART_ADD_ITEM = 'cart/addItem'
// const CART_REMOVE_ITEM = 'cart/removeItem'
// const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
// const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'

// const initialstate = [];

// // Action Creators
// export function addCartItem(productdata) {
//   return { type: CART_ADD_ITEM, payload: productdata }
// }

// export function removeCartItem(productId) {
//   return { type: CART_REMOVE_ITEM, payload: { productId } }
// }

// export function decreaseCartItemQuantity(productId) {
//   return {
//     type: CART_ITEM_DECREASE_QUANTITY,
//     payload: { productId },
//   }
// }

// export function increaseCartItemQuantity(productId) {
//   return {
//     type: CART_ITEM_INCREASE_QUANTITY,
//     payload: { productId },
//   }
// }


// // Action reducer
// const cartReducer = (state = initialstate, action) => {

//   switch (action.type) {
//     case CART_ADD_ITEM:
//       const Item = state.find((cartitem) => cartitem.productId === action.payload.productId);
//       if (Item) {
//         return state.map((cartitem) => {
//           if (cartitem.productId === Item.productId) {
//             return { ...cartitem, quantity: cartitem.quantity + 1 };
//           }
//           return cartitem
//         })
//       }
//       return [...state, { ...action.payload, quantity: 1 }]
//     case CART_REMOVE_ITEM:
//       return state.filter((cartitm) => cartitm.productId !== action.payload.productId)
//     case CART_ITEM_INCREASE_QUANTITY:
//       return state.map((cartItem) => {
//         if (cartItem.productId === action.payload.productId) {
//           return { ...cartItem, quantity: cartItem.quantity + 1 }
//         }
//         return cartItem;
//       })
//     case CART_ITEM_DECREASE_QUANTITY:
//       return state.map((cartItem) => {
//         if (cartItem.productId === action.payload.productId) {
//           return { ...cartItem, quantity: cartItem.quantity - 1 }
//         }
//         return cartItem
//       })
//         .filter((cartItem) => cartItem.quantity > 0)
//     default:
//       return state

//   }
// }

// export default cartReducer

const findItenIndex = (state, action) =>
  state.findIndex((cartItem) => cartItem.productId === action.payload.productId);

const slice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      const existingIndex = findItenIndex(state, action)
      if (existingIndex !== -1) state[existingIndex].quantity += 1
      else state.push({ ...action.payload, quantity: 1 })

    },
    removeCartItem(state, action) {
      const existingIndex = findItenIndex(state, action);
      state.splice(existingIndex, 1);
    },
    increaseCartItemQuantity(state, action) {
      const existingIndex = findItenIndex(state, action);
      state[existingIndex].quantity += 1;
    },
    decreaseCartItemQuantity(state, action) {
      const existingIndex = findItenIndex(state, action);
      state[existingIndex].quantity -= 1;
      if (state[existingIndex].quantity === 0) {
        state.splice(existingIndex, 1);
      }
    }
  }
})
export const {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity
} = slice.actions

export default slice.reducer