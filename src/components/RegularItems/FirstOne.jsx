import React from "react";
import "./FirstOne.styles.css";
//this one doesnt use any component libraries (ex: ANTD/Material-Ui)
//Problems may be on this page OR in the css file that is being imported into it
//there is 8 errors between this page and the css file
const FirstOne = () => {
  return (
    <div> 
      <nav className="topNav">
        <a className="itemLink" href="#">
          Error Pages
        </a>
        <div className="navMenu">
          <a className="navMenuLinks" href="#">
            Home
          </a>
          <a className="navMenuLinks" href="#">
            Menu
          
          <a className="navMenuLinks" href="#">
            Item
          </a>
          <a className="navMenuLinks" href="#">
            Item 2
          </a>
        </div>
      </nav>
    </div>
  );
};

export FirstOne;
