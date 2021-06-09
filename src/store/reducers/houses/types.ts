import { House } from '../house/types';

export interface HousesEvent {
  data: House[];
  error: string;
  type: string;
}

export type HousesState =
  | { status: 'IDLE'; data: null; error: null }
  | { status: 'LOADING'; data: House[] | null; error: null }
  | { status: 'SUCCESS'; data: House[]; error: null }
  | { status: 'FAILURE'; data: House[] | null; error: string };
