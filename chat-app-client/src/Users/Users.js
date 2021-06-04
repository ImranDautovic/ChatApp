import React from "react";
import UserAvatar from "../UserAvatar/UserAvatar";

import "./Users.css";

const Users = ({ users }) => {
  return users.length > 0 ? (
    <div>
      <h2>Active users:</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-box">
            
            <UserAvatar user={user}></UserAvatar>
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
      <h3>Total users: {users.length + 1} </h3>
    </div>
  ) : (
    <div>There is no one else in this room</div>
  );
};

export default Users;
