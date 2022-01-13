import React from "react";
import { Link } from "react-router-dom";

export default function UserProfile(props) {
  return (
    <div>
      <h1>User Profile</h1>

      <div>UserName:{props.userName}</div>
      <div>Member Since: {props.memberSince}</div>

      <Link to="/">Home</Link>
    </div>
  );
}
