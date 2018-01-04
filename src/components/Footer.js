import React from 'react';

import '../styles/components/Footer.scss';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';

const Footer = props => {
  return (
    <div className="container Footer">
      <div className="inner">
        <div className="icons">
          <img className="icon" alt="Facebook" src={Facebook}/>
          <img className="icon" alt="Twitter" src={Twitter}/>
        </div>
        <div className="text">

          <div>
            <div className="span">
              <em>Contact us at 1-800-30-MAGIC</em>
            </div>
            <div className="separator"></div>
            <div className="span">
              Press
            </div>
            <div className="separator"></div>
              <div className="span">
              Privacy Policy
            </div>
            <div className="separator"></div>
            <div className="span">
              Site Map
            </div>
          </div>

          <div>
            MAGIC DRUG is a registered trademark of Big Pharma. Copyright (c) 2017 Big Pharma, inc. PP-XX-XXXXX
          </div>

          <div>
            Intended for US audiences only.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;