import React from "react";

import "./styles/404.css";
import NotFoundImg from "../img/404.svg";

function NotFound() {
  return (
    <div className="Container__404">
      <div className="Container__img__404">
        <img src={NotFoundImg} alt="" className="img__404" />
        <h3>Página no encontrada</h3>
      </div>
    </div>
  );
}

export default NotFound;
