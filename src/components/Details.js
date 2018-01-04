import React from 'react';

import '../styles/components/Details.scss';
import '../styles/components/Button.scss';

import ArrowHead from '../assets/arrow_right.svg';

const Details = props => {
  return (
    <div className="container Details">
      <div className="inner">
        <div className="title">
          FIRST AND ONLY FDA-APPROVED <em>SUPER MAGIC CURE-ALL DRUG*</em>
        </div>
        <div className="disclaimer">
          *Probably, don't quote us, we're not lawyers.
        </div>
        <div className="PressRelease">
          <span>Read more about it.</span>
          <a className="button" href="/Fake-Press-Release.pdf">
            Press Release
            <img className="arrow-head" alt="arrow head" src={ArrowHead}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Details;