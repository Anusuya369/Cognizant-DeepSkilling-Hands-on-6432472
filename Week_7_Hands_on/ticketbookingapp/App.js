import React, { useState } from 'react';
import Guest from './components/Guest';
import User from './components/User';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => setIsLoggedIn(true);
  const logoutHandler = () => setIsLoggedIn(false);

  let pageContent;
  if (isLoggedIn) {
    pageContent = <User />;
  } else {
    pageContent = <Guest />;
  }

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Flight Ticket Booking App</h1>
      {isLoggedIn ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <button onClick={loginHandler}>Login</button>
      )}

      <hr />
      {pageContent}
    </div>
  );
}

export default App;

