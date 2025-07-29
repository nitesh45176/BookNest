import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth(); // ✅ context

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ Automatically redirect if already logged in
  useEffect(() => {
    if (authUser) {
      navigate("/");
    }
  }, [authUser]);

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      if (res.data) {
        toast.success("Logged in Successfully");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user); // ✅ trigger useEffect to redirect
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#0B1D3A] text-white">
      <div className="bg-[#1A2B4C] border border-[#2e4a7d] p-8 rounded-md shadow-lg w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-2xl font-bold text-center mb-6 text-white">Login</h3>

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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-sm text-center mt-4 text-gray-300">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Signup
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

export default Login;
