import React, { useEffect, useState } from "react";

//there is 3 errors on this page right off the bat
// there is one error that you wont see until you launch it and start trying to fix it

const ApiTwo = () => {
  const [stuff, setStuff] = useState([]);

  const apikey = "d4a805b3";
  //there is a limit of 1000 calls per day i think so that shouldnt be the error
  const url = "http://www.omdbapi.com/?apikey=${apikey}&t=Avatar";

  const OMDBFetch = () => {
    fetch(url)
      .then((res) => res)
      .then((data) => {
        console.log(data);
        setStuff(data);
      });
  };

  useEffect(() => {
    OMDBFetch;
  }, []);

  return (
    <div>
      <h1>OMDB</h1>
      <br />
      {stuff.map((item, index) => {
        return (
          <>
            <h1>{item.Title}</h1>
          </>
        );
      })}
    </div>
  );
};

export default ApiTwo;
