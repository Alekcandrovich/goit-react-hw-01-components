import React from 'react';
import UserProfile from '../data/user.json';
import Profile from '../components/Profile/Profile.js';

export const App = () => {
  return (
    <div>
      <Profile
        username={UserProfile.username}
        tag={UserProfile.tag}
        location={UserProfile.location}
        avatar={UserProfile.avatar}
        stats={UserProfile.stats}
      />
    </div>
  );
};

export default App;