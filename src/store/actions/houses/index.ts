import { GET_HOUSES } from './constants';
import eventCreator from '../../lib/eventCreator';
import { House } from '../../reducers/house/types';
import { ThunkDispatch } from '../../types';
import API from '../../utils/api';
import { ENDPOINTS } from '../../utils/api/constants';

const getHousesEvent = eventCreator(GET_HOUSES);

export const getHouses = () => (dispatch: ThunkDispatch) => {
  dispatch(getHousesEvent.fetch());

  return API.get(ENDPOINTS.HOUSES)
    .then((res: House[]) => dispatch(getHousesEvent.resolve(res)))
    .catch(err => dispatch(getHousesEvent.reject(err)));
};
