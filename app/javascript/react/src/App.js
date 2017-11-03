import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './containers/NavBar'
import HomePage from './containers/HomePage'
import TimelineShow from './containers/TimelineShow'
import EventShow from './containers/EventShow'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AdminAll from './containers/AdminAll'


const App = props => {
  return(
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path='/' component={NavBar}>
          <IndexRoute component={HomePage}/>
          <Route path='/timelines/:id' component={TimelineShow}/>
          <Route path='/events/:id' component={EventShow}/>
          <Route path='/admin' component={AdminAll}/>
        </Route>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
