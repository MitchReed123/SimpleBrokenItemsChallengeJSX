import React from "react";
import ImageOne from "../../images/forest.JPG";
import "./card.styles.css";
//this is a simple one, how would you make the top-right & bottom-right edges of that picture match the radius that the div has?
const SideImage = () => {
  return (
    <>
      <div className="SideImageContainer">
        <div className="ImageStuff">
          <img src={ImageOne} className="imgItem" />
        </div>
      </div>
    </>
  );
};

export default SideImage;
