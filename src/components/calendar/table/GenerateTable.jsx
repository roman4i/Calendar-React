/* eslint-disable no-nested-ternary */
import React from 'react';
import StaticStorage from '../../../utils/static-data';
import InnerCell from './cell/createCell';
import { useEvents } from '../../../hooks/useEvents';

import './tableStyle.scss';

const getAPI = StaticStorage.getInstance();

let headerData = ['Name'];
headerData = headerData.concat(getAPI.getDays());

let timeData = ['days'];
timeData = timeData.concat(getAPI.getTimeList());

const TableGen = () => {
  const { eventsItems } = useEvents();
  const cellBody = (row) => (
    <tr key={row}>
      {
        headerData.map((column) => (
          <InnerCell key={row + column} day={column} time={row} events={eventsItems} />
        ))
      }
    </tr>
  );
  return (
    <div className="tableContainer">
      <table>
        <thead>
          {
            cellBody('days')
          }
        </thead>
        <tbody>
          {
            timeData.slice(1, timeData.length + 1).map((row) => (
              cellBody(row)
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default TableGen;
