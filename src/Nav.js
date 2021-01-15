import React from "react";
import "./style/Nav.css";
import cart from "./images/cart.svg";
import search from "./images/search.svg";

export default function Home() {
  return (
    <nav class="navbar navbar-expand-lg nav-c">
      <a class="navbar-brand mx-5" href="#">
        {/* <img
          src=""
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        /> */}
        S.
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link mr-5" href="#">
              Home<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">
              Browse
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link pr-5" href="#">
              <img src={search} className="landing-menu-svg ml-1" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link pr-5" href="#">
              <img src={cart} className="landing-menu-svg ml-1" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
