import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup data:", data);
    // TODO: Add your signup API logic here
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#0B1D3A] text-white">
      <div className="bg-[#1A2B4C] border border-[#2e4a7d] p-8 rounded-md shadow-lg w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-2xl font-bold text-center mb-6 text-white">Signup</h3>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-200">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 bg-[#0E1C34] border border-[#3e5d91] text-white rounded-md outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-sm text-red-400 mt-1">This field is required</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-200">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-[#0E1C34] border border-[#3e5d91] text-white rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-red-400 mt-1">This field is required</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-200">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 bg-[#0E1C34] border border-[#3e5d91] text-white rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-sm text-red-400 mt-1">This field is required</p>
            )}
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
          >
            Signup
          </button>

          {/* Login Link */}
          <p className="text-sm text-center mt-4 text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Login
            </Link>
          </p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="block text-center mt-6 bg-[#0E1C34] border border-[#2a4573] text-white py-2 rounded-md hover:bg-[#1d2f55] transition"
          >
            ← Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
