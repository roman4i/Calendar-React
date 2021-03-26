/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';
import { useGlobalState } from '../context';
import APICommunication from '../utils/api-functions';

const communicationHolder = new APICommunication();

export const useEvents = () => {
  const { state, actions } = useGlobalState();

  const getEvents = async () => {
    try {
      actions.getEventsStart();

      const response = await communicationHolder.getEvents();
      actions.getEventsSuccess({ events: response.data });

      actions.getEventsFinish();
    } catch {
      actions.getEventsFailed({ error: 'Something went wrong' });
    }
  };

  useEffect(() => {
    getEvents();
  // eslint-disable-next-line
  }, [])

  return {
    eventsItems: state.events.items,
    eventsError: state.events.error,
    isLoading: state.events.isLoading,
  };
};
