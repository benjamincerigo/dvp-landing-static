import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../logo/logo';
import SideBar from '../side-bar/side-bar';
import headerStyles from './header.module.scss';

const Header = ({isHome}) => {
  return (
    <header>
      <div
        className={
          isHome ? headerStyles.dark : headerStyles.light
        }
      >
        <Logo isHome={isHome}/>
        <div>Menu</div>
      </div>
      <SideBar isHome={isHome}/>
    </header>
  );
};

export default Header;

Header.propTypes = {
  isHome: PropTypes.boolean,
};