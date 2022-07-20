import React from "react";
import { Link } from "react-router-dom";

type RegisterProps = {};

const Register: React.FC<RegisterProps> = () => {
  return (
    <div>
      <div className="bg-[#F3F7F9] min-h-screen flex flex-col">
        <div className="container max-w-md rounded mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-gray-100 w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block border border-gray-100 w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-gray-100 w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block border border-gray-100 w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Create Account
            </button>

            <div className="text-center text-sm text-[#ABB5BA] mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-[#ABB5BA] text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-[#ABB5BA] text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-[#ABB5BA] mt-6">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue-400"
              to="/login"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
