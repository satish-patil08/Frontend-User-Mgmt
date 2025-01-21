import React from 'react';
import './UserCard.css';

const UserCard = ({ user, onClick }) => (
    <div className="user-card" onClick={() => onClick(user.id)}>
        <h2>{user.name}</h2>
        <p><strong>Email Testing</strong>: {user.email}</p>
        <p><strong>Phone</strong>: {user.phone}</p>
        <p><strong>Company</strong>: {user.company.name}</p>
    </div>
);

export default UserCard;
