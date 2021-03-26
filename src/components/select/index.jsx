/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import NewOption from './options';

const CoolSelect = ({ data, changeListener }) => (
  <select onChange={(e) => changeListener(e)}>
    {data.map((element, id) => (
      <NewOption key={`nameOpt${id}`} insertName={element} value={`opt${id}`}>
        {element}
      </NewOption>
    ))}
  </select>
);
export default CoolSelect;
