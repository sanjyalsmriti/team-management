import React, { useState, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedUser } from '../store/usersSlice';
import UserCard from './UserCard';
import SearchBar from './SearchBar';
import '../styles/UserList.css';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, addedUsers } = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState('');

  // Combine API users and added users
  const allUsers = useMemo(() => {
    return [...users, ...addedUsers];
  }, [users, addedUsers]);

  // Filter users by name (case-insensitive)
  const filteredUsers = useMemo(() => {
    if (!searchTerm.trim()) {
      return allUsers;
    }
    return allUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allUsers, searchTerm]);

  const handleUserClick = useCallback((user) => {
    dispatch(setSelectedUser(user));
  }, [dispatch]);

  return (
    <div className="user-list-container">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="user-list">
        {filteredUsers.length === 0 ? (
          <div className="no-users">
            <p>No users found</p>
          </div>
        ) : (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id || `added-${user.tempId}`}
              user={user}
              onClick={() => handleUserClick(user)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UserList;

