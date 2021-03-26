/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import HeadCell from './type/HeaderCell';
import { EventCell } from './type/EventCell';

const InnerCell = ({ events, time, day }) => {
  const activeCell = events.find((eventDetail) => {
    const eventName = Object.keys(eventDetail.data)[0];
    return eventDetail.data[eventName]?.day === day && eventDetail.data[eventName].time === time;
  });

  const activeEventName = activeCell ? Object.keys(activeCell.data)[0] : null;
  return (
    (time === 'days') ? <HeadCell text={day} />
      : (day === 'Name') ? <td className="tabCell">{ time }</td>
        : (activeCell !== undefined) ? <EventCell text={activeEventName} />
          : <td className="tabCell" />
  );
};

export default InnerCell;
