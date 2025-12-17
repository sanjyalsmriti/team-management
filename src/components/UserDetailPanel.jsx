import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedUser } from '../store/usersSlice';
import '../styles/UserDetailPanel.css';

const UserDetailPanel = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);

  if (!selectedUser) {
    return null;
  }

  const handleClose = () => {
    dispatch(clearSelectedUser());
  };

  return (
    <div className="detail-panel-overlay" onClick={handleClose}>
      <div className="detail-panel" onClick={(e) => e.stopPropagation()}>
        <div className="detail-panel-header">
          <h2>User Details</h2>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
        </div>
        <div className="detail-panel-content">
          <div className="detail-section">
            <h3>Personal Information</h3>
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{selectedUser.name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Username:</span>
              <span className="detail-value">{selectedUser.username || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{selectedUser.email}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{selectedUser.phone || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Website:</span>
              <span className="detail-value">{selectedUser.website || 'N/A'}</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Company Information</h3>
            <div className="detail-item">
              <span className="detail-label">Company:</span>
              <span className="detail-value">{selectedUser.company?.name || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Catch Phrase:</span>
              <span className="detail-value">
                {selectedUser.company?.catchPhrase || 'N/A'}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Business:</span>
              <span className="detail-value">{selectedUser.company?.bs || 'N/A'}</span>
            </div>
          </div>

          {selectedUser.address && (
            <div className="detail-section">
              <h3>Address</h3>
              <div className="detail-item">
                <span className="detail-label">Street:</span>
                <span className="detail-value">{selectedUser.address.street || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Suite:</span>
                <span className="detail-value">{selectedUser.address.suite || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">City:</span>
                <span className="detail-value">{selectedUser.address.city || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Zipcode:</span>
                <span className="detail-value">{selectedUser.address.zipcode || 'N/A'}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailPanel;


