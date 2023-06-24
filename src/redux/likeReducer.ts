import { createSlice } from '@reduxjs/toolkit'

type LikeState = {
    [id: number]: boolean
}

const initialState: LikeState = { 1: true, 2: true }

// export const likeReducer = (state = initialState, action: AnyAction) => {
//     switch (action.type) {
//         case 'TOGGLE_LIKE': {
//             return {
//                 ...state,
//                 [action.id]: !state[action.id],
//             }
//         }
//         default:
//             return state
//     }
// }

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
    },
})

export const { toggleLike } = likeSlice.actions

export default likeSlice.reducer
