import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";

function App() {
  const [accountBalance, setaccountBalance] = useState(14568.27);
  const [currentUser, setCurrentUser] = useState({
    userName: "bob_loblaw",
    memberSince: "08/23/99",
  });
  const mockLogin = (logInInfo) => {
    const newUser = { ...currentUser };
    newUser.userName = logInInfo.userName;
    setCurrentUser(newUser);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home accountBalance={accountBalance} />}
        ></Route>
        <Route
          path="/userProfile"
          element={
            <UserProfile
              userName={currentUser.userName}
              memberSince={currentUser.memberSince}
            />
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
