import React from 'react';
import { FriendItem } from '..';


const FriendItems = ({ friends, username }) => (
  <div className="friend-items content-wrapper">
    {friends.map((data) => <FriendItem data={data} key={data.name} username={username} />)}
  </div>
);

export default FriendItems;
