import React from "react";

import faq from "../../assets/faq2.jpg";

const Faq = () => {
  return (
    <section className=" my-10">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracki text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>

        <div className="md:flex block  items-start gap-5">
          <div className="space-y-4 mb-4 md:mb-0 md:w-[50%]">
            <details className=" border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                How can I find specific user?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                I use search implement in navbar to get the certain user which I
                am looking for
              </p>
            </details>
            <details className="w border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                How to get the single user full details?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Also use a single details route to get the specif user
                information when user click on the user names
              </p>
            </details>
            <details className=" border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Any filter option available?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                Use sort on name,email and company name to sort out the data.{" "}
              </p>
            </details>
          </div>

          <div className=" md:w-[50%]">
            <img className="h-96 w-96" src={faq} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
