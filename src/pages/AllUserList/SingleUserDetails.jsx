import React from "react";
import { useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";
import AllUserCard from "../../components/AllUserCard";
import UserDetails from "./UserDetails";

const SingleUserDetails = () => {
  const { id } = useParams();
  const [data] = useUser();

  const user = data?.find((user) => user.id.toString() === id);
  console.log(user);

  return (
    <div>{user ? <UserDetails user={user} /> : <p>User not found</p>}</div>
  );
};

export default SingleUserDetails;
