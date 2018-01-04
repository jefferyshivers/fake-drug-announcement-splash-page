import React, { Component } from 'react';

import '../styles/containers/Announcement.scss';
import Flair from '../assets/flair_01d.png';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Details from '../components/Details';
import Signup from '../components/Signup';
import ISI from '../components/ISI';
import Footer from '../components/Footer';

class Announcement extends Component {
  render() {
    return (
      <div className="Announcement">
        <Header />
        <div className="main" id="main">
          <Banner />
          <div className="details-and-signup">
            <Details />
            <Signup />
          </div>
          <div className="flair"></div> 
        </div>
        <ISI />
        <Footer />
      </div>
    )
  }
}

export default Announcement;