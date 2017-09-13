import React from "react";

function GiphysIndexItem({ giphy }) {
  return <img src={giphy.images.fixed_height.url} />;
}

export default GiphysIndexItem;
