import React from "react";

const Card = ({uimg,uname,uphone,uemail,uwork}) => {
  return (
    <div className="sec">
      <div className="profile">
        <div className="content1">
          <div className="inner">
            <img src={uimg} alt="" />
          </div>
        </div>
        <div className="content2">
          <h5>{uname}</h5>
          <h5>{uphone}</h5>
          <h5>{uemail}</h5>
          <h5>{uwork}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
