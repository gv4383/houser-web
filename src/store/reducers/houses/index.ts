import { HousesEvent, HousesState } from './types';
import { GET_HOUSES } from '../../actions/houses/constants';
import { EVENTS, STATUSES } from '../../lib/constants';

const initialHousesState: HousesState = {
  status: STATUSES.IDLE,
  data: null,
  error: null,
};

const idleReducer = (state: HousesState, event: HousesEvent) => {
  const { type } = event;

  switch (type) {
    case `${GET_HOUSES}/${EVENTS.FETCH}`:
      return {
        ...state,
        error: null,
        status: STATUSES.LOADING,
      };
    default:
      return state;
  }
};

const loadingReducer = (state: HousesState, event: HousesEvent) => {
  const { data, error, type } = event;

  switch (type) {
    case `${GET_HOUSES}/${EVENTS.RESOLVE}`:
      return {
        data,
        error: null,
        status: STATUSES.SUCCESS,
      };
    case `${GET_HOUSES}/${EVENTS.REJECT}`:
      return {
        ...state,
        error,
        status: STATUSES.FAILURE,
      };
    default:
      return state;
  }
};

const successFailureReducer = (state: HousesState, event: HousesEvent) => {
  const { type } = event;

  switch (type) {
    case `${GET_HOUSES}/${EVENTS.FETCH}`:
      return {
        ...state,
        error: null,
        status: STATUSES.LOADING,
      };
    case `${GET_HOUSES}/${EVENTS.CLEAR}`:
      return initialHousesState;
    default:
      return state;
  }
};

const houses = (state: HousesState = initialHousesState, event: HousesEvent) => {
  const { status } = state;

  switch (status) {
    case STATUSES.IDLE:
      return idleReducer(state, event);
    case STATUSES.LOADING:
      return loadingReducer(state, event);
    case STATUSES.SUCCESS:
    case STATUSES.FAILURE:
      return successFailureReducer(state, event);
    default:
      return state;
  }
};

export default houses;
