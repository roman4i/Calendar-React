import React from 'react';
import { GlobalStateProvider } from './context';
import CalendarBody from './containers/CalendarContainer/InitCalendar';

const App = () => (
  <GlobalStateProvider>
    <CalendarBody />
  </GlobalStateProvider>
);

export default App;
