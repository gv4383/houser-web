import { Action } from 'redux';
import { ThunkDispatch as TDispatch } from 'redux-thunk';

import { AppState } from './reducers/types';

export type ThunkDispatch = TDispatch<AppState, null, Action>;
