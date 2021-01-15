import React from "react";
import Nav from "./Nav";
import ".././style/Products.css";

export default function Home() {
  return (
    <div className="container row-home">
      <Nav />
      {/* <div className="row row-home no-gutters">
        <div className="col-md-5 align-self-center p-5 text-center">
          <h1>hehe</h1>
        </div>

        <div className="col-md-7">
          <h1>hehe</h1>
        </div>
      </div> */}

      <div class="card-group">
        <div class="card m-2">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>

        <div class="card m-2">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>

        <div class="card m-2">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
