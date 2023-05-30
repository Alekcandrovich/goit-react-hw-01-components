import React from 'react';

import Profile from '../components/Profile/Profile';
import userProfile from '../data/user';

import Statistics from '../components/Statistics/Statistics';
import dataStatistics from '../data/data';

import FriendList from '../components/FriendList/FriendList';
import friends from '../data/friends';

import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import transactions from '../data/transactions';


const App = () => {
  return (
    <div>

      <Profile
        username={userProfile.username}
        tag={userProfile.tag}
        location={userProfile.location}
        avatar={userProfile.avatar}
        stats={userProfile.stats}
      />

      <Statistics title="UPLOAD STATS" stats={dataStatistics} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </div>
  );
};

export default App;