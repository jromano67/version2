import React from "react";
// import "./App.css";
import image from "./background.jpeg";

const styleRules = {
  width: "18rem"
};
function Card(props) {
  console.log(props);
  return (
    <div class="card" style={styleRules}>
      <div class="card-body">
        <h5 id="cardTitle" class="card-title">
          {props.data.prevelance}
        </h5>
        <p class="card-text">{props.data.year}</p>
        <a
          href="https://www.healthcare.gov/get-coverage/"
          class="btn btn-primary"
        >
          Click Here
        </a>
      </div>
    </div>
  );
}

export default Card;
