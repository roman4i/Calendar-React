import React from 'react';
import CalendarHead from './head/head';
import TableGen from './table/generate';

const MakeCalendar = () => (
  <div id="calendarDivCont" className="calendarDiv">
    <CalendarHead />
    <TableGen />
  </div>
);

export default MakeCalendar;
