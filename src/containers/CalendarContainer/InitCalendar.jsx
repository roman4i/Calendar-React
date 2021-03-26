import React, { useState } from 'react';
import { TableContainer } from '../TableContainer/TableContainer';
import CalendarHead from '../../components/calendar/head/head';
import { ModalContainer } from '../../components/modal/Modal';
import AuthContent from '../../components/modal/type/Logging';

const CalendarBody = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(true);

  return (
    <div className="calendarDiv">
      { isVisibleModal && (
      <ModalContainer>
        <AuthContent setVisible={setIsVisibleModal} />
      </ModalContainer>
      ) }
      <CalendarHead />
      <TableContainer />
    </div>
  );
};

export default CalendarBody;
