import {configureStore} from "@reduxjs/toolkit"
import activeUserSlice from './redux/activeUserSlice.js'
import chatsSlice from './redux/chatSlice.js'
import profileSlice from './redux/profileSlice.js'
import searchSlice from './redux/searchSlice.js'

const store = configureStore({
    reducer:{
        activeUsers: activeUserSlice,
        chats: chatsSlice,
        search: searchSlice,
        profile: profileSlice
    }
});

export default store;