import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import Astronauts from "../img/astronauts.svg";
import PlatziLogo from "../img/platziconf-logo.svg";

class home extends React.Component {
  render() {
    return (
      <div className="Container__home">
        <div className="Container__info">
          <img src={PlatziLogo} alt="" />
          <h1>Make your badges</h1>
          <Link to="/badges" className="btn btn-primary">
            Start Now!
          </Link>
        </div>
        <div className="Container__img">
          <img src={Astronauts} alt="" />
        </div>
      </div>
    );
  }
}

export default home;
