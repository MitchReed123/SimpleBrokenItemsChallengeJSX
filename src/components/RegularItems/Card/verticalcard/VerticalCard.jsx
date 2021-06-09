import React from "react";
import Details from "./VerticalDetails";
import SideImage from "./VerticalImage";
import "./verticalcard.styles.css";
const VerticalCard = () => {
  return (
    <div className="testDiv1">
      <div className="cardContainer1">
        <SideImage />
        <Details />
        {/* question is on this item */}
      </div>
    </div>
  );
};

export default VerticalCard;
