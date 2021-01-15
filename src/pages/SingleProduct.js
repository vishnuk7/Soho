import React from "react";
import Nav from "./Nav";
import ".././style/SingleProduct.css";
import lady from ".././images/lady.png";
import share from ".././images/share.svg";
import heartBlack from ".././images/heartBlack.svg";
import circleWhite from ".././images/circle-white.svg";
import circleBlack from ".././images/circle-black.svg";
import circleYellow from ".././images/circle-yellow.svg";
import circleRed from ".././images/circle-red.svg";
import circleBlue from ".././images/circle-blue.svg";

export default function Home() {
  return (
    <div className="container">
      <Nav />
      <div className="row row-home no-gutters">
        <div className="col-md-5 align-self-center p-5 text-left">
          <h1 className="font-weight-bold mb-0 product-title">Product title</h1>
          <p className="pb-2 mb-0 product-desc">This is product description</p>
          <img src={share} className="landing-menu-svg ml-3" />
          <img src={heartBlack} className="landing-menu-svg ml-3 heart" />
        </div>

        <div className="col-md-7">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img
                src={lady}
                className="lady-img float-left"
                alt="lady-image"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <p className="bg-lightPink p-3">
                Color
                <img src={circleWhite} className="landing-menu-svg ml-3" />
                <img src={circleBlack} className="landing-menu-svg ml-3" />
                <img src={circleYellow} className="landing-menu-svg ml-3" />
                <img src={circleBlue} className="landing-menu-svg ml-3" />
                <img src={circleRed} className="landing-menu-svg ml-3" />
              </p>
              <p className="bg-lightPink p-3 sizeSelector">
                <p className="ml-3">XS</p>
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
              </p>
              <p className="bg-lightPink p-3 mt-5 addToCart">Add to Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
