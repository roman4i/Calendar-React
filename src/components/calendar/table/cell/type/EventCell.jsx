/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useGlobalState } from '../../../../../context';
import { ModalContainer } from '../../../../modal/Modal';
import DeleteEvent from '../../../../modal/type/CellDel';

import '../../tableStyle.scss';

export const EventCell = ({ text }) => {
  const { state } = useGlobalState();
  const admin = state.user.isAdmin;
  const [isVisibleModal, setVisibleModal] = useState(false);

  return (
    <td className="tabCell">
      <div className="eventCell">
        {text}
        { admin && <div className="closeBtn" onClick={() => setVisibleModal(true)}>×</div>}
        { isVisibleModal && (
        <ModalContainer>
          <DeleteEvent setVisible={() => setVisibleModal(false)} />
        </ModalContainer>
        ) }
      </div>
    </td>
  );
};
