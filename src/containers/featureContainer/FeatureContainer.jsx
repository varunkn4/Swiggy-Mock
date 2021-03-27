import React, { useState, useEffect } from "react";

const FeatureContainer = props => {
    
    return (
        <div className="featureContainer">
            <div className="featureBlock">
                <div className="row">
                    <div className="col-md-4 p-0">
                        <div className="featureUnit">
                            <div className="featureImage">
                                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt=""/>
                            </div>
                            <div className="featureTitle">
                                <label htmlFor="">No Minimum Order</label>
                            </div>
                            <div className="featureSubTitle">
                                <p>Order in for yourself or for the group, with no restrictions on order value</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-0">
                        <div className="featureUnit">
                            <div className="featureImage">
                                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt=""/>
                            </div>
                            <div className="featureTitle">
                                <label htmlFor="">Live Order Tracking</label>
                            </div>
                            <div className="featureSubTitle">
                                <p>Know where your order is at all times, from the restaurant to your doorstep</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-0">
                        <div className="featureUnit">
                            <div className="featureImage">
                                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt=""/>
                            </div>
                            <div className="featureTitle">
                                <label htmlFor="">Lightning-Fast Delivery</label>
                            </div>
                            <div className="featureSubTitle">
                                <p>Experience Swiggy's superfast delivery for food delivered fresh &amp; on time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureContainer;