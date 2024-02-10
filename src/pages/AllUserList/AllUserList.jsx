import React, { useContext, useState } from "react";
import useUser from "../../hooks/useUser";
import AllUserCard from "../../components/AllUserCard";
import { SearchContext } from "../../provider/SearchProvider";

const AllUserList = () => {
  const [data] = useUser();

  const { search } = useContext(SearchContext);

  const [sortBy, setSortBy] = useState("name");

  const [showAll, setShowAll] = useState(false);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleShowAll = () => {
    setShowAll(true);
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

  const filteredUsers = data.filter((user) =>
    user.firstName.toLowerCase().includes(search.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort(sortUsers);

  const displayedUsers = showAll ? sortedUsers : sortedUsers.slice(0, 10);

  return (
    <section className=" my-10">
      <div className="my-5 flex items-center justify-center gap-6">
        <label className="mr-4 flex items-center gap-1">
          <input
            type="radio"
            name="sort"
            value="name"
            checked={sortBy === "name"}
            onChange={handleSortChange}
          />
          Name
        </label>
        <label className="mr-4 flex items-center gap-1">
          <input
            type="radio"
            name="sort"
            value="email"
            checked={sortBy === "email"}
            onChange={handleSortChange}
          />
          Email
        </label>
        <label className="mr-4 flex items-center gap-1">
          <input
            type="radio"
            name="sort"
            value="companyName"
            checked={sortBy === "companyName"}
            onChange={handleSortChange}
          />
          Company Name
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center justify-center">
        {sortedUsers.length === 0 ? (
          <div className="flex items-center justify-center">
            <p className="text-3xl text-red-800 font-semibold text-center ">
              No matching users found. Please enter a correct name.
            </p>
          </div>
        ) : (
           displayedUsers.map((user) => <AllUserCard key={user.id} user={user} />)
        )}
      </div>

      <div className="flex items-center justify-center my-5">
      {!showAll && (
          <button
            className="py-3 px-5 bg-blue-700 text-white font-semibold rounded-xl"
            onClick={handleShowAll}
          >
            Show All Users
          </button>
        )}
      </div>
    </section>
  );
};

export default AllUserList;
