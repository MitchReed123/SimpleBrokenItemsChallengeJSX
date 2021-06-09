import React from "react";
import Details from "./Details";
import SideImage from "./SideImage";
import "./card.styles.css";
const Card = () => {
  return (
    <div className="testDiv">
      <div className="cardContainer">
        <Details />
        {/* question is on this item */}
        <SideImage />
      </div>
    </div>
  );
};

export default Card;
