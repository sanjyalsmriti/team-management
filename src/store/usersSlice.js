import { createSlice } from '@reduxjs/toolkit';
import { storage } from '../utils/localStorage';

// Load persisted data from localStorage
const persistedAddedUsers = storage.getAddedUsers();

const initialState = {
  users: [],
  addedUsers: persistedAddedUsers, // Users added via form (persisted)
  selectedUser: null,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
    addUser: (state, action) => {
      state.addedUsers.push(action.payload);
      // Persist to localStorage
      storage.saveAddedUsers(state.addedUsers);
    },
  },
});

export const {
  setUsers,
  setLoading,
  setError,
  setSelectedUser,
  clearSelectedUser,
  addUser,
} = usersSlice.actions;

export default usersSlice.reducer;

