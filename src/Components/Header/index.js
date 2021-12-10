import React from 'react';
import * as C from './styles';
import { UserContext } from '../../UserContext';

const Header = () => {
  const { teste } = React.useContext(UserContext);

  return (
    <header className="header">
      <span className="logo">
        <span className="initLogo">Ghi</span>Gallery
      </span>

      <a
        className="portfolio"
        href="https://leehsanttana.github.io/personal-portfolio/"
      >
        Created by Leonam Santtana
      </a>
    </header>
  );
};

export default Header;
