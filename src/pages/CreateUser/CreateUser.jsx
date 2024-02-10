import React from "react";
import UserForm from "../../components/UserForm/UserForm";

const CreateUser = () => {
  return (
    <div className="my-10">

      <div className="flex items-center justify-center my-5">
        <h1 className="lg:text-4xl text-blue-700 font-bold text-3xl">Here you can create a user</h1>
      </div>
      <UserForm />
    </div>
  );
};

export default CreateUser;
