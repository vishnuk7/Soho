import React from "react";
import lady from "./images/lady.png";
import menu from "./images/menu.svg";

export default function Home() {
  return (
    <div className="container">
      <div className="row row-home no-gutters">
        <div className="col-md-5 align-self-center p-5 text-center">
          <h1 className="font-weight-bold mb-0 landing-text">S O H O</h1>
          <p className="pb-2">READYMADE | CUSTOM | JEWELLERY</p>
          <button type="button" class="btn homebtn-btn text-center">
            <span>Catelog</span>
            <img src={menu} className="landing-menu-svg ml-3" />
          </button>
        </div>

        <div className="col-md-7">
          <img src={lady} className="lady-img float-left" alt="lady-image" />
        </div>
      </div>
    </div>
  );
}
