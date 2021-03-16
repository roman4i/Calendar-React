import React from 'react';
import reactDom from 'react-dom';
import MakeCalendar from './components/calendar/makeCalendar';

// eslint-disable-next-line react/jsx-filename-extension
const result = <MakeCalendar />;
reactDom.render(result, document.getElementById('root'));
