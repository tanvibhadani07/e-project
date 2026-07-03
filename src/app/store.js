import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../cart/cartSlice'
import likeReducer from '../cart/likeSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    like: likeReducer
  },
})