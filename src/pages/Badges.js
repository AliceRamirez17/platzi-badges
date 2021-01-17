import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../img/badge-header.svg";
import BadgesList from "../components/BadgesList";
import Loader from "../components/Loader";

class Badges extends React.Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results: [],
    },
  };

  constructor(props) {
    super(props);
    console.log("1. constructor()");
  }

  componentDidMount() {
    console.log("3. componentDidMount()");

    // this.timeoutId = setTimeout(() => {
    //   this.setState({
    //     data: [
    //       {
    //         id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
    //         firstName: "Freda",
    //         lastName: "Grady",
    //         email: "Leann_Berge@gmail.com",
    //         jobTitle: "Legacy Brand Director",
    //         userName: "FredaGrady22221-7573",
    //         avatarUrl:
    //           "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
    //       },
    //       {
    //         id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
    //         firstName: "Major",
    //         lastName: "Rodriguez",
    //         email: "Ilene66@hotmail.com",
    //         jobTitle: "Human Research Architect",
    //         userName: "MajorRodriguez61545",
    //         avatarUrl:
    //           "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
    //       },
    //       {
    //         id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
    //         firstName: "Daphney",
    //         lastName: "Torphy",
    //         email: "Ron61@hotmail.com",
    //         jobTitle: "National Markets Officer",
    //         userName: "DaphneyTorphy96105",
    //         avatarUrl:
    //           "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
    //       },
    //     ],
    //   });
    // }, 3000);

    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await res.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage + 1,
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
            <BadgesList badges={this.state.data.results} />
            {this.state.loading && (
              <div className="loader">
                <Loader />
              </div>
            )}
            {!this.state.loading && (
              <button onClick={() => this.fetchCharacters()}>Load more</button>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
