import React from 'react';

import './tableStyle.scss';

const headerCells = ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

// I do not like this table, I am planning to redo it.
const TableGen = () => {
  let currCell = 0;
  let trCount = 0;
  let time = 10;
  const trs = [];

  for (let i = 0; i < 10; i += 1) {
    const tds = [];
    for (let j = 0; j < 6; j += 1) {
      if (j === 0 && currCell !== 0) {
        tds.push(
          <td className="tabCell" key={`cell${currCell}`} id={`cell${currCell}`}>
            {`${time}:00`}
          </td>,
        );
        time += 1;
      } else if (i === 0) {
        tds.push(
          <td className="headColorise tabCell" key={`cell${currCell}`} id={`cell${currCell}`}>
            {headerCells[j]}
          </td>,
        );
      } else {
        tds.push(
          <td className="tabCell" key={`cell${currCell}`} id={`cell${currCell}`} />,
        );
      }
      currCell += 1;
    }
    trs.push(
      <tr key={`tr${trCount}`}>{tds}</tr>,
    );
    trCount += 1;
  }

  return (
    <div className="tableContainer">
      <table>
        <tbody>
          {trs}
        </tbody>
      </table>
    </div>
  );
};

export default TableGen;
