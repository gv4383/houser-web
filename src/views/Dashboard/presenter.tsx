import React from 'react';

import HouseCard from '../../components/HouseCard';
import TitleBar from '../../components/TitleBar';
import { BUTTON_TEXT_SIZE, COLORS, TEXT_SIZE } from '../../constants';
import { House } from '../../store/reducers/house/types';
import { TEXT } from './constants';

interface Props {
  houses: House[] | null;
}

const DashboardPresenter = ({ houses }: Props) => {
  const displayHouses = () =>
    houses?.map((house: House) => <HouseCard key={house.name} house={house} />);

  return (
    <div className="dashboard-container">
      <TitleBar
        buttonBold
        buttonColor={COLORS.GREEN}
        buttonText={TEXT.ADD_NEW_PROPERTY}
        buttonTextSize={BUTTON_TEXT_SIZE.MEDIUM}
        hasDivider
        title={TEXT.DASHBOARD}
        titleSize={TEXT_SIZE.LARGE}
      />
      <div>{displayHouses()}</div>
    </div>
  );
};

export default DashboardPresenter;
