import Profile from "./Profile";
import user from "./json/user.json";

import Statistics from "./Statistics";
import data from "./json/data.json";

import friends from "./json/friends.json";
import FriendList from "./FriendList";

import transactions from "./json/transactions.json";
import TransactionHistory from "./TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics 
        title="Upload stats" stats={data} 
      />
      <FriendList
      friends={friends}
      />
      <TransactionHistory 
      items={transactions} 
      />;
    </div>
  );
};
