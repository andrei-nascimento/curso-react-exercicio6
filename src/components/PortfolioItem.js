import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioItem(props) {
  var { largeImage, smallImage, hoverText } = props;

  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
      <div className="portfolio-item">
        <div className="hover-bg">
          <Link
            to={largeImage}
            title={hoverText}
            data-lightbox-gallery="gallery1"
          >
            <div className="hover-text">
              <h4>{hoverText}</h4>
            </div>
            <img
              src={smallImage}
              className="img-responsive"
              alt="Project Title"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
