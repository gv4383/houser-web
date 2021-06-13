import React from 'react';

import logo from '../../assets/houser_logo.png';

import './styles.scss';

const Header = () => (
  <div className="header-container">
    <div className="header-sub-container">
      <img className="header-logo" src={logo} alt="Houser Logo" />
      <div className="header-title">HOUSER</div>
    </div>
  </div>
);

export default Header;
