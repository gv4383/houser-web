import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import DashboardPresenter from './presenter';
import { PATHS } from '../../components/Routes/constants';
import { getHouses } from '../../store/actions/houses';
import { houses as housesSelector } from '../../store/selectors/houses';

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const houses = useSelector(housesSelector);

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  const handleOnClick = () => {
    history.push(PATHS.WIZARD);
  };

  return <DashboardPresenter buttonOnClick={handleOnClick} houses={houses} />;
};

export default Dashboard;
