import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friends }) {
    return (
      <div className={css.list}>
        {friends.map(({ id, ...friend }) => (
          <FriendListItem key={id} {...friend} />
        ))}
      </div>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendList;