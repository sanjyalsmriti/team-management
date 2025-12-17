import React, { memo } from 'react';
import UserList from '../components/UserList';
import UserDetailPanel from '../components/UserDetailPanel';
import { useFetchUsers } from '../hooks/useFetchUsers';
import { useSelector } from 'react-redux';
import '../styles/Users.css';

const Users = () => {
  useFetchUsers();
  const { loading, error } = useSelector((state) => state.users);

  if (loading) {
    return (
      <div className="users-page">
        <div className="loading-container">
          <p>Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="users-page">
        <div className="error-container">
          <p className="error-message">Error: {error}</p>
          <p>Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="users-page">
      <div className="page-header">
        <h2>Team Members</h2>
        <p>Click on any user card to view detailed information</p>
      </div>
      <UserList />
      <UserDetailPanel />
    </div>
  );
};

export default memo(Users);


