import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import {
  StyledList,
  Wrapper,
} from 'components/organisms/UsersList/UserList.styles';

const UsersList = (props) => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
