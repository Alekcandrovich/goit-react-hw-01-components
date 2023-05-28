import React from 'react';
import UserProfile from '../data/user';
import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import DataStatistics from '../data/data';
import FriendList from '../components/FriendList/FriendList';
import Friends from '../data/friends';


const App = () => {
  return (
    <div>

      <Profile
        username={UserProfile.username}
        tag={UserProfile.tag}
        location={UserProfile.location}
        avatar={UserProfile.avatar}
        stats={UserProfile.stats}
      />

      <Statistics title="Upload stats" stats={DataStatistics} />
      
      <FriendList friends={Friends} />

    </div>
  );
};

export default App;