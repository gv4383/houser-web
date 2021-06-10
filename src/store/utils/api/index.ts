import axios from 'axios';
import { ApiHouse, House } from '../../reducers/house/types';

import { baseUrl, getHeaders } from './config';

export const API = {
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

export const formatFetchedHouse = (house: ApiHouse): House => {
  const { id, name, address, city, state, zipcode, image_url, monthly_mortgage, monthly_rent } =
    house;
  const formattedHouse = {
    id,
    name,
    address,
    city,
    state,
    zipcode,
    imageUrl: image_url,
    monthlyMortgage: monthly_mortgage,
    monthlyRent: monthly_rent,
  };

  return formattedHouse;
};

export const formatFetchedHouses = (houses: ApiHouse[]): House[] => {
  const formattedHouses = houses.map((house: ApiHouse) => formatFetchedHouse(house));

  return formattedHouses;
};
