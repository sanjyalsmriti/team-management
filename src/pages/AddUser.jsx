import React from 'react';
import AddUserForm from '../components/AddUserForm';
import '../styles/AddUser.css';

const AddUser = () => {
  return (
    <div className="add-user-page">
      <div className="page-header">
        <h2>Add New Team Member</h2>
        <p>Fill out the form below to add a new user to your team</p>
      </div>
      <AddUserForm />
    </div>
  );
};

export default AddUser;


