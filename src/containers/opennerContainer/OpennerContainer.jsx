import React, { useState, useEffect } from "react";

const Header = props => {
    

    const cityClick = city => {
        // alert(city);
        props.redirect();
    }
    
    return (
        <div className="opennerContainer">
            <div className="opennerContentArea">
                <div className="mainContents">
                    <div className="opennerHeader">
                        <div className="logoWrapper">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png" alt=""/>
                        </div>
                        <div className="signOnOptions">
                            <button className="loginButton">Login</button>
                            <button className="signupButton">Sign up</button>
                        </div>
                    </div>
                    <div className="opennerTitleArea">
                        <h1 className="mainTitle">Hungry?</h1>
                        <h2 className="subTitle">Order food from favourite restaurants near you.</h2>
                        <div className="opennerSearch">
                            <div className="searchWrapper">
                                <input type="text" className="mainSearch" placeholder="Enter your delivery location"/>
                            </div>
                            <a href="" className="searchButton">FIND FOOD</a>
                        </div>
                        <h3 className="subMainText">POPULAR CITIES IN INDIA</h3>
                        <ul className="cityList">
                            {["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Pune", "& more."].map((item, index) => (
                                <li className={"cityItem itemNo_" + (index%2 == 0? "even": "odd")} onClick={()=>cityClick(item)}>
                                    <label>{item}</label>
                                </li>
                            ))}                            
                            
                        </ul>
                    </div>
                </div>
                <div className="opennerBanner"></div>
            </div>
        </div>
    );
}

export default Header;