import React from 'react';

import HouseCard from '../../components/HouseCard';
import Button from '../../components/Input/Button';
import { House } from '../../store/reducers/house/types';

interface Props {
  houses: House[] | null;
}

const DashboardPresenter = ({ houses }: Props) => {
  const displayHouses = () =>
    houses?.map((house: House) => <HouseCard key={house.name} house={house} />);

  return (
    <div className="dashboard-container">
      <div>
        <div className="dashboard-title">Dashboard</div>
        <Button color="green" textSize="lg">
          Add New Property
        </Button>
      </div>
      <div>{displayHouses()}</div>
    </div>
  );
};

export default DashboardPresenter;
