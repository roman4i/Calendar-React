import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { GlobalStateProvider } from './context';
import CalendarBody from './containers/CalendarContainer/InitCalendar';

const App = () => (
  <Router>
    <GlobalStateProvider>
      <Switch>
        <Route path="/calendar">
          <CalendarBody />
        </Route>
        <Route path="/create-event">
          <div>this must be a event create page</div>
        </Route>
        <Redirect from="/" to="/calendar" />
      </Switch>
    </GlobalStateProvider>
  </Router>
);

export default App;
