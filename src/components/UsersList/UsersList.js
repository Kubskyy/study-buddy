import React from 'react';
import { users } from 'data/users';
import UserListItem from './UserListItem/UserListItem';

const UsersList = (props) => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
