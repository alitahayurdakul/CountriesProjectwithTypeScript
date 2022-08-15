import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

interface IState {
  countryName?: string;
}

class Home extends Component<IState> {
  state: IState = {
    countryName: "",
  };

  handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      window.location.replace("/detail/" + this.state.countryName);
    }
  };

  onChangeSearch = (e: { target: { name: string; value: string } }) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClickSearch = () => {};

  render(): JSX.Element {
    const { countryName } = this.state;
    return (
      <>
        <div className="search-bar">
          <div className="text-center mx-auto py-4">
            <input
              type="text"
              className=" me-2 px-1"
              name="countryName"
              value={countryName}
              onChange={this.onChangeSearch}
              onKeyUp={this.handleKeyPress}
            />
            <Link
              to={"detail/" + countryName}
              className="px-3 "
              onClick={this.onClickSearch}
            >
              Search
            </Link>
          </div>
        </div>
        <Outlet />
      </>
    );
  }
}
export default Home;
