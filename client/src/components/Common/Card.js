import React from "react";

const Card = (props) => {
  return (
    <div className="sec">
      <div className="profile">
        <div className="content1">
          <div className="inner">
            <img src={props.img} alt="" />
          </div>
        </div>
        <div className="content2">
          <h5>{props.name}</h5>
          <h5>{props.phone}</h5>
          <h5>{props.email}</h5>
          <h5>{props.work}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
