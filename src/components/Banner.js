import React from 'react';

import '../styles/components/Banner.scss';
import Kitten from '../assets/Kitten.png';

const Banner = props => {
  return (
    <div className="container Banner">
      <div className="ComingSoon">COMING SOON</div>
      <img className="Kitten" alt="kitten" src={Kitten}/>
    </div>
  );
}

export default Banner;