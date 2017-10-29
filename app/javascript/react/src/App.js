import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './containers/NavBar'
import HomePage from './containers/HomePage'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={HomePage}/>
      </Route>
    </Router>
  )
}

export default App
