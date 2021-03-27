import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const City = props => {
  // const classes = useStyles();
  return (
    <div className="contentWrapper">   
      <div className="header">
        <div className="logoWrapSecond">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png" alt=""/>
        </div>
      </div>
      <div className="citySearchSection">
        <div className="citySearchWrap">
          <h1 className="citySearchTitle">Great restaurants in Abohar, delivering to you</h1>
          <div className="citySearchSub">Set exact location to find the right restaurants near you.</div>
          <div className="citySearch">
            <label htmlFor="">Enter street name, area etc...</label>
            <div className="searchButton">Find Food</div>
          </div>
        </div>
      </div>
      <div className="detailsSection">
        <div className="detailsTitle">About the food culture in Abohar</div>
        <div className="detailsSub">
          Order food &amp; beverages online from restaurants near &amp; around you. We deliver food from your neighborhood local joints, your favorite cafes, luxurious &amp; elite restaurants in your area. Exciting bit? We place no minimum order restrictions! Order in as little (or as much) as you?d like. We?ll Swiggy it to you!
        </div>
      </div>
      <div className="hotelSection">
        <div className="hotelTitle">
          Popular restaurants in and around Abohar
        </div>
        <div className="hotelListSection">
          <div className="row">
            {
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(item => (
                <div className="col-md-3 p-0">
                  <div className="hotelUnit">
                    <div className="hotelImage">
                      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/eo5htv7o97qvxr4kcrgv" alt=""/>
                    </div>
                    <div className="hotelName">shere punjab veg</div>
                    <div className="hotelCuisine">North Indian</div>
                    <div className="hotelMeta">
                        <div class="hotelRating">
                          <span class="icon-star">★</span>
                          <span>4.7</span>
                        </div>
                        <div>•</div>
                        <div>25 MINS</div>
                        <div>•</div>
                        <div>₹150 FOR TWO</div>
                    </div>
                    <div className="hotelOffer">
                      <div className="offerUnit">
                        <span className="offerIcon">*</span>
                        <label htmlFor="" className="offer">40% off | Use SWIGGYIT</label>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
            
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>    
  );
}

City.contextTypes = {
  router: PropTypes.object.isRequired
}

export default City;