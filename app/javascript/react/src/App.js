import React from 'react';

const App = props => {

  let signIn = () => {
    window.location.replace("/auth/github")
  }

  let signOut = () => {
    window.location.replace("/signout")
  }

  return(
    <div>
      <h1>* The Pensieve Project *</h1>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signOut}>Sign In</button>
    </div>
  )
}

export default App
