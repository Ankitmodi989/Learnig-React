import React from 'react'

 const CART_ADD_ITEM = 'cart/addItem'
 const CART_REMOVE_ITEM = 'cart/removeItem'
 const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
 const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'

const initialstate = [];

// Action Creators
export function addCartItem(productId, quantity = 1) {
  return { type: CART_ADD_ITEM, payload: { productId, quantity } }
}

export function removeCartItem(productId) {
  return { type: CART_ADD_ITEM, payload: { productId } }
}

export function decreaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId },
  }
}

export function increaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId },
  }
}



const cartReducer = (state = initialstate, action) => {

  switch (action.type) {
    case CART_ADD_ITEM:
      return [...state, action.payload]
    case CART_REMOVE_ITEM:
      return state.filter((cartitm) => cartitm.productId !== action.payload.productId)
    case CART_ITEM_INCREASE_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, count: cartItem.count + 1 }
        }
        return cartItem;
      })
    case CART_ITEM_DECREASE_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, count: cartItem.count - 1 }
        }
        return cartItem
      })
        .filter((cartItem) => cartItem.count > 0)
    default:
      return state

  }
}

export default cartReducer