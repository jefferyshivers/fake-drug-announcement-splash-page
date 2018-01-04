import React from 'react';

import '../styles/components/Header.scss';

const Header = props => {
  const separator = (
    <div className="separator"></div>
  )
  return (
    <div className="container Header">
      <a className="link" href="/">
        Important Safety Information
      </a>
      {separator}
      <a className="link" href="/">
        Prescribing Information
      </a>
      {separator}
      <a className="link" href="/">
        Patient Information
      </a>
    </div>
  );
}

export default Header;