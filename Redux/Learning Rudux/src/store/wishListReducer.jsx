import React from 'react'
const WISHLIST_ADD_ITEM = 'wishList/addItem'
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

const initialstate = [];

export function addWishListItem(productId) {
  return { type: WISHLIST_ADD_ITEM, payload: { productId } }
}
export function removeWishListItem(productId) {
  return { type: WISHLIST_REMOVE_ITEM, payload: { productId } }
}


const wishListReducer = (state = initialstate, action) => {

  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [
        ...state,
        action.payload
      ]
    case WISHLIST_REMOVE_ITEM:
      return state.filter((whishlist) => whishlist.productId !== action.payload.productId
      )

    default:
      return state

  }
  return (
    <div>wishListReducer</div>
  )
}

export default wishListReducer