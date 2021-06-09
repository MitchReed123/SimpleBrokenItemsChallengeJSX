import React, { useState, useEffect } from "react";

//there are 5 errors on this page

const ApiThree = () => {
  const [stonks, setStonks] = useState({});

  const url =
    "https://finnhub.io/api/v1/news?category=forex&token=bttlpsf48v6ojt2he7p0";
  const StonkFetch = async () => {
    const response = fetch(url);
    const data = await response.json();
    console.log(data);
    setStonks(data);
  };

  useState(() => {
    StonkFetch;
  });

  return (
    <div>
      <h1>Stonks</h1>
      {stonks.map((item, index) => {
        
          <div key={index}>
            <h4>{item.headline}</h4>
            <img src={item.image} style={ width: "450px", height: "250px" } />
          </div>
        
      })}
    </div>
  );
};

export default ApiThree;
