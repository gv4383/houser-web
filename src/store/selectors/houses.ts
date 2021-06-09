import { createSelector } from 'reselect';

import { AppState } from '../reducers/types';

const housesState = (state: AppState) => state.houses;

export const houses = createSelector(housesState, ({ data }) => data && data);
