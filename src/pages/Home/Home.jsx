import React from "react";
import AllUserList from "../AllUserList/AllUserList";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import HeroBanner from "../HeroBanner/HeroBanner";
import Info from "../Info/Info";

const Home = () => {
  return (
    <div >
      {/* <HeroBanner/> */}
      <div className="max-w-screen-xl px-5 mx-auto">
      <AllUserList />
      <Info/>
      </div>
    </div>
  );
};

export default Home;
