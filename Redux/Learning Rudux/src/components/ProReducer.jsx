import React from 'react'
import { productlist } from './productList'

const initialstate = productlist;

const ProReducer = ( state = initialstate,action) => {

  return state
}

export default ProReducer