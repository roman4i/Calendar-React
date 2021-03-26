/* eslint-disable react/prop-types */
import React from 'react';

import '../../tableStyle.scss';

export default ({ text }) => {
  const someText = text;

  return (
    <td className="headColorise tabCell">{ someText }</td>
  );
};
