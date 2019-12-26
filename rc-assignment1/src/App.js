import React, { useState } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';

const App = props => {
  const [ userNameState, setUserNameState ] = useState(
    {
      userName: "unassigned"
    }
  )

  const changeUserNameHandler = ( event ) => {
    setUserNameState({userName: event.target.value})
  }

  return (
    <div className="App">
      <UserInput onChange={changeUserNameHandler} value={userNameState.userName} />
      <UserOutput userName={userNameState.userName} />
      <UserOutput userName={userNameState.userName} />

    </div>

  )
}

export default App;
