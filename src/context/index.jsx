/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useReducer, useContext } from 'react';

const GlobalStateContext = React.createContext({});

const initialState = {
  user: {
    isAdmin: false,
  },
  events: {
    items: [],
    error: '',
    isLoading: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload.user,
        },
      };
    }
    case 'GET_EVENTS_SUCCESS': {
      return {
        ...state,
        events: {
          ...state.events,
          items: action.payload.events.map((event) => ({
            ...event,
            data: typeof event.data === 'string' ? JSON.parse(event.data) : event.data,
          })),
        },
      };
    }
    case 'GET_EVENTS_FAILED': {
      return {
        ...state,
        events: {
          ...state.events,
          error: action.payload.eventError,
        },
      };
    }
    case 'GET_EVENTS_START': {
      return {
        ...state,
        events: {
          ...state.events,
          isLoading: true,
        },
      };
    }
    case 'GET_EVENTS_FINISH': {
      return {
        ...state,
        events: {
          ...state.events,
          isLoading: false,
        },
      };
    }
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUser = ({ user }) => {
    dispatch({
      type: 'SET_USER',
      payload: {
        user,
      },
    });
  };

  const getEventsSuccess = ({ events }) => {
    dispatch({
      type: 'GET_EVENTS_SUCCESS',
      payload: {
        events,
      },
    });
  };

  const getEventsFailed = ({ error }) => {
    dispatch({
      type: 'GET_EVENTS_FAILED',
      payload: {
        eventError: error,
      },
    });
  };

  const getEventsStart = () => {
    dispatch({
      type: 'GET_EVENTS_START',
    });
  };

  const getEventsFinish = () => {
    dispatch({
      type: 'GET_EVENTS_FINISH',
    });
  };

  const actions = {
    setUser,
    getEventsSuccess,
    getEventsFailed,
    getEventsStart,
    getEventsFinish,
  };

  return (
    <GlobalStateContext.Provider value={{ state, actions }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
