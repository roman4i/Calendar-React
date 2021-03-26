/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import StaticStorage from '../../../utils/static-data';
import { useGlobalState } from '../../../context';
import CoolSelect from '../../select';

const staticData = StaticStorage.getInstance();
const namesList = staticData.getNames();
const admList = staticData.getAdmins();

const AuthContent = ({ setVisible }) => {
  const [selectedUser, setSelectedUser] = useState(namesList[0]);
  const { actions } = useGlobalState();

  const process = (someData) => {
    setSelectedUser(someData.target.selectedOptions[0].text);
  };

  const setAdmin = (user) => {
    if (admList.indexOf(user) === -1) {
      actions.setUser({
        user: {
          isAdmin: false,
        },
      });
    } else {
      actions.setUser({
        user: {
          isAdmin: true,
        },
      });
    }
  };

  const handleChangeVisible = () => {
    setAdmin(selectedUser);
    setVisible(false);
  };

  return (
    <div className="modal">
      <div key="auth1" className="modalHeadText">Please authorise</div>
      <div key="auth2" className="interfaceComm">
        <CoolSelect data={namesList} onChange={alert} changeListener={process} />
        <button type="button" onClick={handleChangeVisible}>Confirm</button>
      </div>
    </div>
  );
};

export default AuthContent;
