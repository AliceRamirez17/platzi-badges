import React from "react";

import "./styles/BadgesList.css";
import twitterLogo from "../img/twitterLogo.png";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <div className="Badge__card">
              <div className="Badge__img">
                <img className="Badge__avatar" src={badge.avatarUrl} alt="" />
              </div>
              <div className="Badge__info">
                <h4 className="Badge__name">
                  {badge.firstName} {badge.lastName}
                </h4>
                <div className="Badge__username">
                  <img src={twitterLogo} alt="" />
                  <p className="">@{badge.userName}</p>
                </div>
                <p>{badge.jobTitle}</p>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
