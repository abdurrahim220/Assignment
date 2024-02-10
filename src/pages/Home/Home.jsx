import React from "react";
import AllUserList from "../AllUserList/AllUserList";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import HeroBanner from "../HeroBanner/HeroBanner";

const Home = () => {
  return (
    <div >
      <HeroBanner/>
      <div className="max-w-screen-xl px-5 mx-auto">

      <AllUserList />
      </div>
    </div>
  );
};

export default Home;
