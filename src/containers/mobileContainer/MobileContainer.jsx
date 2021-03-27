import React from "react";

const MobileContainer = props => {    
    return (
        <div className="mobileContainer">
            <div className="mobileAdWrapper">
                <div className="mobileTitle">Restaurants in your pocket</div>
                <div className="mobileSubTitle">Order from your favorite restaurants &amp; track on the go, with the all-new Swiggy app.</div>
                <div className="storeLinks">
                    <a href="https://play.google.com/store/apps/details?id=in.swiggy.android" className="appLink">
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt=""/>
                    </a>
                    <a href="https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920" className="appLink">
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt=""/>
                    </a>
                </div>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" alt="" className="mobImages mob1"/>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" alt="" className="mobImages mob2"/>
            </div>
        </div>
    );
}

export default MobileContainer;