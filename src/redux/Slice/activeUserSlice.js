import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    id: '',
    email: '',
    profilePic: '',
    bio: '',
    name: ''
}

const activeUserSlice= createSlice({
    name: 'activeUser',
    initialState,
    reducers: {
        setActiveUser: (state, {payload})=>{
            state.id= id,
            state.email= email,
            state.profilePic= profilePic,
            state.bio= bio,
            state.name= name
        }
    }
})

export const {setActiveUser} = activeUserSlice.actions;
export default activeUserSlice.reducer;