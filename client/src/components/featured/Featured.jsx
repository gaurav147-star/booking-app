import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );
  const featuredItem = [
    {
      cityName: "Berlin",
      data: data[0],
      imageURL:
        "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      cityName: "Madrid",
      data: data[1],
      imageURL:
        "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    },
    {
      cityName: "London",
      data: data[2],
      imageURL:
        "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
    },
  ];

  return (
    <div className="featured">
      {featuredItem.map((item) => (
        <div className="featuredItem" key={item.cityName}>
          <LazyLoadImage
            effect="blur"
            src={item.imageURL}
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>{item.cityName}</h1>
            <h2>{item.data} properties</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
