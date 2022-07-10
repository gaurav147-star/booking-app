import useFetch from "../../hooks/useFetch";
import "./featuredProperties.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FeaturedProperties = () => {
  const { data } = useFetch("/hotels/getCityHotels?featured=true&limit=6");

  return (
    <div className="fp">
      {data.map((item) => (
        <div className="fpItem" key={item._id}>
          <LazyLoadImage
            effect="blur"
            src={item.photos[0]}
            alt=""
            className="fpImg"
          />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Starting from ₹{item.cheapestPrice}</span>
          {item.rating && (
            <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
