import React from 'react';
import StaticStorage from '../../../static-data';

import './calendarHead.scss';

const CalendarHead = () => {
  const namesList = StaticStorage.getInstance().getNames();
  const namesComponent = namesList.map((element, id) => {
    const optVal = `opt${id}`;
    return (
      <option key={optVal} value={optVal}>{element}</option>
    );
  });
  namesComponent.push(
    <option key="all" value="all">All members</option>,
  );
  return (
    <div className="headStyle">
      <div className="headText">Calendar</div>
      <form className="eventContainer">
        <select className="personSelect" defaultValue="all">
          {namesComponent}
        </select>
        <button type="button" className="newEvent">
          New event +
        </button>
      </form>
    </div>
  );
};

export default CalendarHead;
