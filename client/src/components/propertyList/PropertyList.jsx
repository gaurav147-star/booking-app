import React from "react";
import "./propertyList.scss";
import useFetch from "../../hooks/useFetch";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const PropertyList = () => {
  const { data } = useFetch("/hotels/countByType");
  // console.log(data);

  const images = [
    "https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];
  const navigate = useNavigate();
  const handleClick = (type) => {
    if (type === "hotel") {
      navigate("/gethotels");
    }
  };

  return (
    <div className="pList">
      {data &&
        images.map((img, i) => (
          <div
            className="pListItem"
            key={i}
            onClick={() => handleClick(data[i].type)}
          >
            <LazyLoadImage
              effect="blur"
              src={img}
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{data[i]?.type}</h1>
              <h2>
                {data[i]?.count} {data[i]?.type}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PropertyList;
