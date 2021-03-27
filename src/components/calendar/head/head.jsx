import React from 'react';
import { useHistory } from 'react-router-dom';
import StaticStorage from '../../../utils/static-data';
import { useGlobalState } from '../../../context';

import './calendarHead.scss';

const CalendarHead = () => {
  const { state } = useGlobalState();
  const history = useHistory();

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

  const toEv = () => {
    history.push('/create-event');
  };

  return (
    <div className="headStyle">
      <div className="headText">Calendar</div>
      <form className="eventContainer">
        <select className="personSelect" defaultValue="all">
          {namesComponent}
        </select>
        <button type="button" className="newEvent" disabled={!state.user.isAdmin} onClick={toEv}>
          New event +
        </button>
      </form>
    </div>
  );
};

export default CalendarHead;
