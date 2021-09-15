import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import {
  StyledAverage,
  StyledInfo,
  Wrapper,
} from 'components/molecules/UserListItem/UserListItem.styles';

const UserListItem = ({
  deleteUser,
  userData: { average, name, attendance = '0%' },
}) => {
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
