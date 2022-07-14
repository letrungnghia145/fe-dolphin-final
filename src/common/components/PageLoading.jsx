import React from "react";

export const PageLoading = (props) => {
  if (props.isLoading === true) {
    return <div className="loading">Loading&#8230;</div>;
  }
  return null;
};
