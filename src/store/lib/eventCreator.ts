import { EVENTS } from './constants';
import { ERROR_MESSAGES } from '../../constants';

// eslint-disable-next-line
interface Event<T = any> {
  type: string;
  data?: T;
  error?: string | null;
}

interface EventCreator {
  fetch: () => Event;
  // eslint-disable-next-line
  resolve: (data: any) => Event;
  reject: (error?: string) => Event;
  clear: () => Event;
}

const eventCreator = (constant: string): EventCreator => ({
  fetch: () => ({ type: `${constant}/${EVENTS.FETCH}` }),
  // eslint-disable-next-line
  resolve: (data: any) => ({
    type: `${constant}/${EVENTS.RESOLVE}`,
    data,
  }),
  reject: (error?: string) => ({
    type: `${constant}/${EVENTS.REJECT}`,
    error: error || ERROR_MESSAGES.UNKOWN_ERROR,
  }),
  clear: () => ({ type: `${constant}/${EVENTS.CLEAR}` }),
});

export default eventCreator;
