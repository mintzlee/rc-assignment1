import React, { useState } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';

const App = props => {
  const [ userNameState, setUserNameState ] = useState(
    {
      user: "unassigned"
    }
  )

  const changeUserNameHandler = ( event ) => {
    setUserNameState({user: event.target.value})
  }

  const style= {
    backgroundColor: "#DDD",
    font: "inherit",
    border: "1px solid red",
    padding: "5px"
  }

  return (
    <div className="app">
      <UserInput style={style} onChange={changeUserNameHandler} value={userNameState.user} />
      <UserOutput userName={userNameState.user} />
      <UserOutput userName={userNameState.user} />

    </div>

  )
}

export default App;
