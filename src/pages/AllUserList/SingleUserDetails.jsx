import React from "react";
import { useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";
import UserDetails from "../../components/UserDetails";

const SingleUserDetails = () => {
  const { id } = useParams();
  const [data] = useUser();

  const user = data?.find((user) => user.id.toString() === id);
  //   console.log(user);

  return (
    <div>
      <div className="flex items-center justify-center my-10">
        <span className="text-5xl text-center font-bold text-green-600">
          Here is the User information <br />
          <span className="text-yellow-600">That you want to see</span>
        </span>
      </div>
      <div className="flex items-center justify-center my-10">
        {user ? <UserDetails user={user} /> : <p>User not found</p>}
      </div>
    </div>
  );
};

export default SingleUserDetails;
