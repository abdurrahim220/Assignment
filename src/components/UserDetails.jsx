const UserDetails = ({ user }) => {
  const {
    image,
    firstName,
    lastName,
    email,
    address: { address, state, city },
    company: { name: companyName },
  } = user;

  return (
    <div className="max-w-xs bg-white  rounded p-4 mb-4">
    <img
      src={image}
      alt="User Avatar"
      className="w-16 h-16 mx-auto mb-4 rounded-full"
    />
    <div className="text-center">
      <p className="text-xl font-semibold">
        {firstName} {lastName}
      </p>
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

export default UserDetails;
