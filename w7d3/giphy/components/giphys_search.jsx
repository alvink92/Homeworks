import React from "react";

import GiphysIndex from "./giphys_index";

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.props
      .fetchSearchGiphys(this.state.searchTerm)
      .then(this.setState({ searchTerm: "" }));
  }

  render() {
    let { searchTerm } = this.state;

    return (
      <div>
        <GiphysIndex giphys={this.props.giphys} />
        <form>
          <input type="text" onChange={this.handleChange} value={searchTerm} />
          <input type="submit" onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}

export default GiphysSearch;
