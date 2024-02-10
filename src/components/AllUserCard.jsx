import React from "react";
import { Link } from "react-router-dom";

const AllUserCard = ({ user }) => {
  const {
    id,
    image,
    firstName,
    lastName,
    email,
    address: { state, address, city },
    company: { name: companyName },
  } = user;

  return (
    <div className="max-w-xs w-72 h-80 rounded-lg bg-white shadow-md p-4">
      <img
        src={image}
        alt="User Avatar"
        className="w-16 h-16 mx-auto mb-4 rounded-full"
      />
      <div className="text-center">
        <Link to={`/singleUser/${id}`} className="text-xl font-semibold">
          {firstName} {lastName}
        </Link>
        <p className="text-gray-600">
          <strong className="text-black">Email:</strong> {email}
        </p>
      </div>

      <div className="mt-4">
        <div className="text-gray-700 flex-1 gap-2">
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>State:</strong> {state}
          </p>
          <p>
            <strong>City:</strong> {city}
          </p>
        </div>
        <p className="text-gray-700">
          <strong>Company:</strong> {companyName}
        </p>
      </div>
    </div>
  );
};

export default AllUserCard;
