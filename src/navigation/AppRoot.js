import React from 'react';
import {useSelector} from 'react-redux';
import AppNavigation from './AppNavigation';
import OnboardNavigation from './OnboardNavigation';

const AppRoot = () => {
  const isLoggedIn = useSelector((state) => state.onboard.isLoggedIn);
  return isLoggedIn ? <AppNavigation /> : <OnboardNavigation />;
};

export default AppRoot;
