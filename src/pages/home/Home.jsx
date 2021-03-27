import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import OpennerContainer from '../../containers/opennerContainer/OpennerContainer';
import FeatureContainer from '../../containers/featureContainer/FeatureContainer';
import MobileContainer from '../../containers/mobileContainer/MobileContainer';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Home = props => {
  // const classes = useStyles();
  useEffect(() => {
       
  }, []); 
  const goToCity = () => {
    // alert();
    props.history.push("/city");
  }
  return (
    <div className="contentWrapper">   
      <div className="opennerSection">
        <OpennerContainer redirect={goToCity}/>
      </div>
      <div className="featureSection">
        <FeatureContainer />
      </div>
      <div className="mobileSection">
        <MobileContainer />
      </div>
      <div className="footerSection"></div>
    </div>    
  );
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Home;