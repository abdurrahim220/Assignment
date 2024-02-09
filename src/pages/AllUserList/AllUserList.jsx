import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import AllUserCard from "../../components/AllUserCard";

const AllUserList = () => {
  const [data] = useUser();
  const [sortBy, setSortBy] = useState("name");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortUsers = (a, b) => {
    switch (sortBy) {
      case "name":
        return a.firstName.localeCompare(b.firstName);
      case "email":
        return a.email.localeCompare(b.email);
      case "companyName":
        return a.company.name.localeCompare(b.company.name);
      default:
        return 0;
    }
  };

  const sortedUsers = [...data].sort(sortUsers);

  return (
    <section>
      {/* Radio buttons for sorting */}
      <div className="mb-4 flex items-center justify-center gap-6">
        <label className="mr-4">
          <input type="radio" name="sort" value="name" checked={sortBy === "name"} onChange={handleSortChange} />
           Name
        </label>
        <label className="mr-4">
          <input type="radio" name="sort" value="email" checked={sortBy === "email"} onChange={handleSortChange} />
           Email
        </label>
        <label>
          <input type="radio" name="sort" value="companyName" checked={sortBy === "companyName"} onChange={handleSortChange} />
           Company Name
        </label>
      </div>

      {/* Display sorted users */}
      <div className="flex flex-wrap gap-4 justify-center">
        {sortedUsers.map((user) => (
          <AllUserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default AllUserList;
