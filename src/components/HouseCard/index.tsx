import React from 'react';

import { House } from '../../store/reducers/house/types';

import './styles.scss';

interface Props {
  house: House;
}

const HouseCard = ({ house }: Props) => {
  const { name, address, city, state, zipcode } = house;

  return (
    <div className="house-card-container">
      <p>Property Name: {name}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Zip: {zipcode}</p>
    </div>
  );
};

export default HouseCard;
