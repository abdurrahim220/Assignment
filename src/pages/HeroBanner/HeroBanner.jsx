import React from "react";

const HeroBanner = () => {
  return (
    <div className="h-[40%] bg-gray-50 flex items-center">
      <section
        className="bg-cover bg-center py-32 w-full"
        style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
      >
        <div className="max-w-screen-xl px-5 mx-auto text-left text-white">
          <div className="flex items-center">
            <div className="w-1/2">
              <h1 className="xl:text-5xl text-2xl md:text-3xl lg:text-4xl  font-medium mb-6">
                Welcome to My Dummy User Details page
              </h1>
              <p className="text-xl mb-12">
                Here you can find any user and can see the user details page or
                search there names also filter out the user using sort by
                name,email and company name.
              </p>
              <button className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">
                Demo
              </button>
            </div>
            <div className="w-1/2 pl-16">
              <img
                src="https://source.unsplash.com/random?ux"
                className="h-64 w-full object-cover rounded-xl"
                alt="Layout Image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
