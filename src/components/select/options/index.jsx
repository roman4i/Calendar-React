/* eslint-disable react/prop-types */
import React from 'react';

const NewOption = ({ insertName, value }) => (
  <option value={value}>{insertName}</option>
);

export default NewOption;
