import React from 'react';

import deleteButton from '../../assets/delete_button.png';
import { House } from '../../store/reducers/house/types';

import './styles.scss';

interface Props {
  house: House;
}

const HouseCard = ({ house }: Props) => {
  const { name, address, city, state, zipcode } = house;

  return (
    <div className="house-card-container">
      <img className="delete-button" src={deleteButton} alt="Delete" />
      <p>Property Name: {name}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Zip: {zipcode}</p>
    </div>
  );
};

export default HouseCard;
