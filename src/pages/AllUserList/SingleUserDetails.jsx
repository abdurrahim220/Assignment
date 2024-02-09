import React from "react";
import { useParams } from "react-router-dom";

const SingleUserDetails = () => {
  const { id } = useParams();
  return <div>SingleUserDetails {id}</div>;
};

export default SingleUserDetails;
