import axios from 'axios';

import { baseUrl, getHeaders } from './config';

const API = {
  get: (endpoint: string) =>
    axios(`${baseUrl}${endpoint}`, {
      method: 'GET',
      headers: getHeaders(),
      // eslint-disable-next-line
    }).then((res: any) => res.data),
  // eslint-disable-next-line
  post: (endpoint: string, payload: any) =>
    axios(`${baseUrl}${endpoint}`, {
      method: 'POST',
      headers: getHeaders(),
      data: payload,
      // eslint-disable-next-line
    }).then((res: any) => res.data),
  // eslint-disable-next-line
  put: (endpoint: string, payload: any) =>
    axios(`${baseUrl}${endpoint}`, {
      method: 'PUT',
      headers: getHeaders(),
      data: payload,
      // eslint-disable-next-line
    }).then((res: any) => res.data),
  delete: (endpoint: string) =>
    axios(`${baseUrl}${endpoint}`, {
      method: 'DELETE',
      headers: getHeaders(),
      // eslint-disable-next-line
    }).then((res: any) => res),
};

export default API;
