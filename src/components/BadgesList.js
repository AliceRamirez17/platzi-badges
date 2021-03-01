import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";
import twitterLogo from "../img/twitterLogo.png";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    const badgesList = this.props.badges.slice(0).reverse();

    return (
      <ul className="list-unstyled">
        {badgesList.map((badge) => {
          return (
            <li key={badge.id} className="Badge__card">
              <div className="Badge__img">
                <Gravatar
                  className="Badge__avatar-list"
                  email={badge.email}
                  alt={`${badge.firstName} ${badge.lastName}`}
                />
              </div>
              <div className="Badge__info">
                <h4 className="Badge__name">{`${badge.firstName} ${badge.lastName}`}</h4>
                <div className="Badge__username">
                  <img src={twitterLogo} alt="" />
                  <p className="">@{badge.twitter}</p>
                </div>
                <p>Job Title: {badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
