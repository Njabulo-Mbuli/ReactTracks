import React, {useState} from "react";

import withRoot from "../../withRoot";
import Login from './Login'
import Register from './Register'

const AuthIndex = () => {
  const [newUser, setNewUser] = useState(false)

  return newUser ? <Register setNewUser={setNewUser}/> : <Login setNewUser={setNewUser}/>;
};

export default withRoot(AuthIndex)