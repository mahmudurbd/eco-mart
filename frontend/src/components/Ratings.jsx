import React from "react";
// import "./Ratings.scss";
import { FaRegStar, FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

const Ratings = ({ value, text, justifyContent, fontSize = "14px" }) => {
  return (
    <div
      className="rating-area"
      style={{
        display: "flex",
        justifyContent: justifyContent,
        gap: "5px",
        alignItems: "center",
        fontSize: fontSize,
      }}
    >
      <div className="rating-icon-area">
        <span>
          {value >= 1 ? (
            <FaStar style={{ color: "#FFD700" }} />
          ) : value >= 0.5 ? (
            <FaRegStarHalfStroke style={{ color: "#FFD700" }} />
          ) : (
            <FaRegStar style={{ color: "#FFD700" }} />
          )}
        </span>
        <span>
          {value >= 2 ? (
            <FaStar style={{ color: "#FFD700" }} />
          ) : value >= 1.5 ? (
            <FaRegStarHalfStroke style={{ color: "#FFD700" }} />
          ) : (
            <FaRegStar style={{ color: "#FFD700" }} />
          )}
        </span>
        <span>
          {value >= 3 ? (
            <FaStar style={{ color: "#FFD700" }} />
          ) : value >= 2.5 ? (
            <FaRegStarHalfStroke style={{ color: "#FFD700" }} />
          ) : (
            <FaRegStar style={{ color: "#FFD700" }} />
          )}
        </span>
        <span>
          {value >= 4 ? (
            <FaStar style={{ color: "#FFD700" }} />
          ) : value >= 3.5 ? (
            <FaRegStarHalfStroke style={{ color: "#FFD700" }} />
          ) : (
            <FaRegStar style={{ color: "#FFD700" }} />
          )}
        </span>
        <span>
          {value >= 5 ? (
            <FaStar style={{ color: "#FFD700" }} />
          ) : value >= 4.5 ? (
            <FaRegStarHalfStroke style={{ color: "#FFD700" }} />
          ) : (
            <FaRegStar style={{ color: "#FFD700" }} />
          )}
        </span>
      </div>
      <div className="rating-review-area">{text}</div>
    </div>
  );
};

export default Ratings;
