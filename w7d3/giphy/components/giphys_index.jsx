import React from "react";

import GiphysIndexItem from "./giphys_index_item";

class GiphysIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.giphys.map((giphy, index) => (
          <GiphysIndexItem key={index} giphy={giphy} />
        ))}
      </div>
    );
  }
}

export default GiphysIndex;
