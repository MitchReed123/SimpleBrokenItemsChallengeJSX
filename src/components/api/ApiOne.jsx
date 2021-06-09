import React, { useState, useEffect } from "react";

// find the errors in this fetch
// there are four errors

const ApiOne = () => {
  const [films, setFilms] = useState({});

  const url = "https:/swapi.dev/api/films/";

  const FilmFetch = () => {
    fetch(url)
      .then((res) => res)
      .then((data) => {
        console.log(data.results);
        setFilms(data.results);
      });
  };

  useEffect(() => {
    FilmFetch;
  }, []);

  return (
    <div>
      <h1>Ewan McGregor plays a Space Slug in star wars right? </h1>
      {films.map((item, index) => {
        return (
          <div key={index}>
            <h1>
              {item.episode_id} | {item.title}
            </h1>
            <p>Episode Description: {item.opening_crawl}</p>
            <span>Director: {item.director}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ApiOne;
