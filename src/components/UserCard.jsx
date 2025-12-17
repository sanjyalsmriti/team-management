import React, { memo } from 'react';
import '../styles/UserCard.css';

const UserCard = memo(({ user, onClick }) => {
  const handleClick = () => onClick(user);
  
  return (
    <div className="user-card" onClick={handleClick}>
      <div className="user-card-content">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-email">{user.email}</p>
        <p className="user-company">{user.company?.name || 'N/A'}</p>
      </div>
    </div>
  );
});

UserCard.displayName = 'UserCard';

export default UserCard;

