import React from 'react'
export const WISHLIST_ADD_ITEM = 'wishList/addItem'
export const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

const initialstate = [];

const wishListReducer = (state = initialstate, action) => {

  switch (action.type) {
    case WISHLIST_ADD_ITEM:
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
    case WISHLIST_REMOVE_ITEM:
      return {
        ...state, wishList: state.wishList.filter((whishlist) => whishlist.productId !== action.payload.productId
        )
      }
    default:
      return state

  }
  return (
    <div>wishListReducer</div>
  )
}

export default wishListReducer