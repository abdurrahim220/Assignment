import React from "react";
import useUser from "../../hooks/useUser";
import AllUserCard from "../../components/AllUserCard";

const AllUserList = () => {
  const [data] = useUser();
//   console.log(data);
  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center">
        {data?.map((user) => (
          <AllUserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AllUserList;
