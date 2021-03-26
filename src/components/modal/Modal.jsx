/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';

import './style/modal-style.scss';

export const ModalContainer = ({ children }) => (
  <div className="modalContainer">
    { children }
  </div>
);
