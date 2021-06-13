import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DashboardPresenter from './presenter';
import { getHouses } from '../../store/actions/houses';
import { houses as housesSelector } from '../../store/selectors/houses';

const Dashboard = () => {
  const dispatch = useDispatch();
  const houses = useSelector(housesSelector);

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  return <DashboardPresenter houses={houses} />;
};

export default Dashboard;
