import React from 'react'

export const CART_ADD_ITEM = 'cart/addItem'
export const CART_REMOVE_ITEM = 'cart/removeItem'
export const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
export const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'

const initialstate = [];

const cartReducer = (state = initialstate, action) => {

  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state, cartitem: [...state.cartitem, action.payload] }
    case CART_REMOVE_ITEM:
      return { ...state, cartitem: state.cartitem.filter((cartitm) => cartitm.productId !== action.payload.productId) }
    case CART_ITEM_INCREASE_QUANTITY:
      return {
        ...state, cartitem: state.cartitem.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, count: cartItem.count + 1 }
          }
          return cartItem;
        })
      }
    case CART_ITEM_DECREASE_QUANTITY:
      return {
        ...state, cartitem: state.cartitem.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, count: cartItem.count - 1 }
          }
          return cartItem
        })
      }
    default:
      return state

  }
}

export default cartReducer