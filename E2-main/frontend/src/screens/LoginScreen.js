import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const redirect = "/profile";
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);
  const handleClick = (e) => {
    if (email && password) dispatch(login(email, password));
  };
  return (
    <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full space-y-5 md:w-3/5 md:pr-16">
            <p className="font-medium text-blue-500 uppercase">Building</p>
            <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
              Changing The Way
            </h2>
            <p className="text-xl text-gray-600 md:pr-16">
              Learn how to engage with your visitors and teach them about your
            </p>
          </div>

          <div className="w-full mt-16 md:mt-0 md:w-2/5">
            <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
              <h3 className="mb-6 text-2xl font-medium text-center">
                Sign in to your Account
              </h3>
              <input
                type="text"
                name="email"
                value={email}
                className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                value={password}
                className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="block">
                <button
                  className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"
                  onClick={handleClick}
                >
                  Log Me In
                </button>
              </div>
              <p className="w-full mt-4 text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <a href="#_" className="text-blue-500 underline">
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
