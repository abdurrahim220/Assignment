import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UserForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm();

  const handleFormSubmit = () => {
    Swal.fire({
      icon: "success",
      title: "User Added!",
      text: "The user has been successfully added.",
    });
    reset()
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="max-w-md mx-auto mt-4 p-6 bg-white rounded-xl shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Avatar
        </label>
        <input
          type="file"
          id="image"
          {...register("image")}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", { required: "This field is required" })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.firstName && (
          <span className="text-red-500 text-sm">
            {errors.firstName.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          {...register("lastName", { required: "This field is required" })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.lastName && (
          <span className="text-red-500 text-sm">
            {errors.lastName.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register("email", { required: "This field is required" })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Street
        </label>
        <input
          type="text"
          id="street"
          {...register("street")}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
          State
        </label>
        <input
          type="text"
          id="state"
          {...register("state")}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
          City
        </label>
        <input
          type="text"
          id="city"
          {...register("city")}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          {...register("companyName")}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
