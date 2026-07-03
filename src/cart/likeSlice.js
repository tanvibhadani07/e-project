import { createSlice } from '@reduxjs/toolkit'

export const likeSlice = createSlice({
    name: 'like',

    initialState: {
        likeData: []
    },

    reducers: {
        addToLike: (state, action) => {

            const check = state.likeData.find(
                (item) => item.id === action.payload.id
            );

            if (!check) {
                state.likeData.push(action.payload);
            }
        },

        removeLike: (state, action) => {
            state.likeData = state.likeData.filter(
                (item) => item.id !== action.payload
            );
        }
    }
})

export const { addToLike, removeLike } = likeSlice.actions

export default likeSlice.reducer