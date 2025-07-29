import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form submitted:", data);
    reset(); // clear form after submission
    // TODO: send to backend / show toast
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#0B1D3A] text-white">
      <div className="bg-[#1A2B4C] border border-[#2e4a7d] p-8 rounded-md shadow-lg w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            Contact Us
          </h3>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-200">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
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

          {/* Message Field */}
          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-200">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message"
              className="w-full px-3 py-2 bg-[#0E1C34] border border-[#3e5d91] text-white rounded-md outline-none"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-400 mt-1">This field is required</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
          >
            Send Message
          </button>

          {/* Back to Home */}
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
};

export default ContactPage;
