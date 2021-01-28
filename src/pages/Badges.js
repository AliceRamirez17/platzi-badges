import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../img/badge-header.svg";
import BadgesList from "../components/BadgesList";
// import Loader from "../components/Loader";

import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  constructor(props) {
    super(props);
    console.log("1. constructor()");
  }

  componentDidMount() {
    console.log("3. componentDidMount()");
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();

      this.setState({
        loading: false,
        data: data,
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: err,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log("6. componentWilUnmount");
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log("2. render()");
    if (this.state.loading === true) {
      return "Loading...";
    }
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="img-fluid" src={confLogo} alt="Conf logo" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
