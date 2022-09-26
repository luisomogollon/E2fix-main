import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="text-gray-200 body-font bg-slate-600">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <button className="flex title-font font-medium items-center text-gray-900 mb-6 md:mb-0">
          <span className="ml-1 mt-2  text-gray-200 text-xl">ABA</span>
        </button>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <button className="mr-5 hover:text-gray-900"></button>
        </nav>
        <button className="inline-flex items-center bg-sky-700 border-0 py-2 px-3  focus:outline-none hover:bg-blue-400 rounded text-base mt-2 md:mt-0 " onClick={logoutHandler}>
          Log out
        </button>
      </div>
    </header>
  );
};
export default Header;
