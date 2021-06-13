import React from 'react';

import HouseCard from '../../components/HouseCard';
import { House } from '../../store/reducers/house/types';

interface Props {
  houses: House[] | null;
}

const DashboardPresenter = ({ houses }: Props) => {
  const displayHouses = houses?.map((house: House) => <HouseCard key={house.name} house={house} />);

  return <div>{displayHouses}</div>;
};

export default DashboardPresenter;
