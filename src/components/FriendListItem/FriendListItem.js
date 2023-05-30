import React from 'react';
import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.item}>
        <span className={`${css['status']} ${isOnline ? css.online : css.offline}`} />
        <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;