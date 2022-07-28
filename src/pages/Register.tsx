import axios from "axios";
import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

type RegisterProps = {};

const Register: React.FC<RegisterProps> = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copassword, setCoPassword] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://172.16.1.63:8080/api/register", {
        firstname,
        lastname,
        email,
        password,
        copassword,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-[#F3F7F9] min-h-screen flex flex-col">
        <div className="container max-w-md rounded mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-gray-100 w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="block border border-gray-100 w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              className="block border border-gray-100 w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="block border border-gray-100 w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="block border border-gray-100 w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={(e) => setCoPassword(e.target.value)}
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
    </form>
  );
};
export default Register;
