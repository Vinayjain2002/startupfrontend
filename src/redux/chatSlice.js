import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import { setActiveUser } from './activeUserSlice';

const initialState= {
    chats: [],
    activeChat: '',
    isLoading: false,
    notificatios: []
}

export const fetchChats= createAsyncThunk('redux/chats', async()=>{
    try{
        const data="";
        // need to bring the data and placing the data
        return data;
    }
    catch(err){
        toast.error("Something went Wrong");
    }
});

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setActiveChat: (state, {payload})=>{
            state.activeChat= payload;
        },
        setNotifications: (state,{payload})=>{
            state.notificatios= payload;
        }
    },
    // these are not directly related to slice but need to modify the state
    extraReducers: (builder) =>{
        builder.addCase(fetchChats.fulfilled, (state, action)=>{
            state.chats= action.payload;
            state.isLoading= true;
        }).addCase(fetchChats.rejected, (state,action)=>{
            state.isLoading= false;
        }).addCase(fetchChats.pending, (state,action)=>{
            state.isLoading= true;
        })
    }
});

export const {setActiveChat, setNotifications}= chatsSlice.actions;
export default chatsSlice.reducer;