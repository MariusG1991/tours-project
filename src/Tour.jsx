import { useState } from "react";

const Tour = ({ id, info, image, name, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="single-tour">
      <img className="img" src={image} alt={name} />
      <p className="tour-price">${price}</p>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>

        <button
          type="button"
          className="delete-btn btn btn-block"
          onClick={() => removeTours(id)}
        >
          remove
        </button>
      </div>
    </div>
  );
};
export default Tour;
