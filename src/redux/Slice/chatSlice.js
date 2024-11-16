import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'

const initialState= {
    chats: [],
    activeChat: '',
    isLoading: false,
    notificatios: []
}

