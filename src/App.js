import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import'./app.css';
import LogOut from './components/LogOut';
import LogedIn from './components/Logging';
import { useSelector } from 'react-redux';
import {selectUser} from "./features/userSlice";

const App = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? <LogedIn /> : <LogOut />}
    </div>
  )
}

export default App