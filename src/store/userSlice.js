import { createSlice } from '@reduxjs/toolkit';
import { storage } from '../utils/localStorage';

const persisiteAddedUsers = storage.getAddedUsers();
const initialState = {
    users: [],
    getAddedUsers: persisiteAddedUsers,
    selectedUsers: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
            state.loading =  false;
            state.error = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state,action ) => {
            state.error = action.payload;
            state.loading = false;
        },
        setSelectedUsers: (state,action)=>{
            state.selectedUser = action.payload;
        },
        clearSelectedUsers: (state)=>{
            state.selectedUser = null;
        },
        addUser: (state,action) =>{
            state.addedUser.push(action.payload);
            storage.saveAddedUsers(state.addedUser);
        }

    }

})