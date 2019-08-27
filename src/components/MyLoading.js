import React from "react";

const MyLoading = props => {
  if (props.isFetch) {
    return <h1>Loading.....</h1>;
  }
  if (props.error != null) {
    return <h1>Error.......{props.error}</h1>;
  }
};

export default MyLoading;
