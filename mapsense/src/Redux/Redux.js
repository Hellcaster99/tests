import { createSlice, configureStore } from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name: 'mapsense_State',
    initialState: {
        user: JSON.parse(localStorage.getItem('mapsense_user')) || {
            fname: 'First Name',
            lname: 'Last Name',
            pincode: 'Pincode'
        },
        data: JSON.parse(localStorage.getItem('mapsense_data')) || []
    },
    reducers:{
        updateUser : (state,action) => {
            state.user = action.payload;
            localStorage.setItem('mapsense_user',JSON.stringify(state.user))
        },
        updateData: (state,action) => {
            state.data = action.payload;
            localStorage.setItem('mapsense_data',JSON.stringify(state.data))
        }
    }

})

export const {updateUser, updateData} = stateSlice.actions

export const store = configureStore({
    reducer: stateSlice.reducer
})

