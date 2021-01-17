import React from "react";

import "./styles/BadgesList.css";
import twitterLogo from "../img/twitterLogo.png";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="Badge__card">
              <div className="Badge__img">
                <img className="Badge__avatar-list" src={badge.image} alt="" />
              </div>
              <div className="Badge__info">
                <h4 className="Badge__name">{badge.name}</h4>
                <div className="Badge__username">
                  <img src={twitterLogo} alt="" />
                  <p className="">@{badge.name}</p>
                </div>
                <p>Specie: {badge.species}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
