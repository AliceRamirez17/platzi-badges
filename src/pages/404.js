import React from "react";

import "./styles/404.css";
import NotFoundImg from "../img/404.svg";

function NotFound() {
  return (
    <div className="Container__404">
      <div className="Container__img">
        <img src={NotFoundImg} alt="" />
      </div>
    </div>
  );
}

export default NotFound;
