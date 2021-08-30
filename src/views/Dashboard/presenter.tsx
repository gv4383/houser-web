import React from 'react';

import HouseCard from '../../components/HouseCard';
import TitleBar from '../../components/TitleBar';
import { BUTTON_TEXT_SIZE, COLORS, TEXT_SIZE } from '../../constants';
import { House } from '../../store/reducers/house/types';
import { TEXT } from './constants';

import './styles.scss';

interface Props {
  buttonOnClick: () => void;
  houses: House[] | null;
}

const DashboardPresenter = ({ buttonOnClick, houses }: Props) => {
  const displayHouses = () =>
    houses?.map((house: House) => <HouseCard key={house.name} house={house} />);

  return (
    <div className="dashboard-container">
      <TitleBar
        buttonBold
        buttonColor={COLORS.GREEN}
        buttonOnClick={buttonOnClick}
        buttonText={TEXT.ADD_NEW_PROPERTY}
        buttonTextSize={BUTTON_TEXT_SIZE.MEDIUM}
        hasDivider
        title={TEXT.DASHBOARD}
        titleSize={TEXT_SIZE.LARGE}
      />
      <div className="dashboard-sub-title">{TEXT.HOUSE_LISTINGS}</div>
      <div>{displayHouses()}</div>
    </div>
  );
};

export default DashboardPresenter;
