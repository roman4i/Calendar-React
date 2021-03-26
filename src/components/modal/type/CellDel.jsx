/* eslint-disable react/prop-types */
import React from 'react';

const DeleteEvent = ({ setVisible, data }) => (
  <div className="modal">
    <div className="modalHeadText">
      { `Are you sure to delete ${data}` }
    </div>
    <div className="interfaceComm">
      <button type="button" onClick={setVisible}>Button1</button>
      <button type="button" onClick={setVisible}>Button2</button>
    </div>
  </div>
);

export default DeleteEvent;
