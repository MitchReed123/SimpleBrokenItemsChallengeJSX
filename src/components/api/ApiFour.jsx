import React, { useEffect, useState } from "react";
//5 errors on this page.
//Quick hint about one of them: it will cause the fetch to loop forever 

const UnsplashFetch = () => {
  const [images, setImages] = useState([]);
  //50 requests per hours so be careful
  var token = "ElrtPTPm8uB0NSc1fJDDlQR7NtrJpU7_0mnFzQm0mKk";
  var url = "https://api.unsplash.com/photos/?client_id=${token}";
  const fetchit = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      });
  };

  useEffect(() => {
    fetchit;
  });
  return (
    <div>
      <h1>Unsplash<h1>
      {images.map((item, index) => {
        console.log(item);
        return (
          <div key={index}>
            <p>{item.alt_description}</p>
            <p>{item.likes}</p>
            <img src="item.urls.regular" />
          </div>
        );
      })}
    </div>
  );
};

export default UnsplashFetch;
