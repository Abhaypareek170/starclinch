import React, { useState } from "react";
import "./Cards.css";

const Cards = (props) => {
  let item = props.ele;
  const [mainImg, setMainImg] = useState(item.image.img_1);
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <div className="SingerCard">
        <div className="image_div">
          <img className="main-image" src={mainImg} alt="" />
        </div>
        <div className="content_div">
          <div className="name_postdiv">
            <h1 className="large">{item.title}</h1>
            <p className="small">{item.type}</p>
          </div>
          <p className="medium_text" style={{ marginBottom: "0.5rem" }}>
            Location
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.7rem",
            }}
          >
            <p className="medium_text">Event Booking</p>
            <p
              className="small"
              style={{
                fontStyle: "italic",
                fontWeight: "600",
                paddingRight: "7px",
              }}
            >
              {item.event}
            </p>
          </div>
          <div className="image_url_div">
            <div>
              <img
                className="thumbnail"
                src={item.image.img_1}
                alt=""
                onClick={(e) => setMainImg(e.target.src)}
              />
            </div>
            <div>
              <img
                className="thumbnail"
                src={item.image.img_2}
                alt=""
                onClick={(e) => setMainImg(e.target.src)}
              />
            </div>
            <div>
              <img
                className="thumbnail"
                src={item.image.img_3}
                alt=""
                onClick={(e) => setMainImg(e.target.src)}
              />
            </div>
            <div>
              <img
                className="thumbnail"
                src={item.image.img_4}
                alt=""
                onClick={(e) => setMainImg(e.target.src)}
              />
            </div>
          </div>
        </div>
        <div
          className={!isSelected ? "selectBTN " : "slected_activeBTN selectBTN"}
          onClick={() => setIsSelected(!isSelected)}
        >
          <p id="text" className="large">
            {isSelected ? "SELECTED" : "SELECT"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
