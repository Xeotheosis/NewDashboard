import React from "react";

const Header = ({ toggleMenuView, menu }) => {
  return (
    <header className="flex items-center justify-between box-border mb-20 lg:px-10">
      <h1 className="poppins font-bold text-3xl flex items-center gap-2">
        {" "}
        <i className="bx bx-bar-chart-alt text-3xl"></i>AsPropManagers
      </h1>

      <div className="hidden md:flex justify-around gap-5 uppercase px-3 mt-[8px] font-bold">
        <a
          to="/CoffeeRoasters/Home"
          className={({ isActive }) => {
            return isActive
              ? "opacity-100"
              : "opacity-55 cursor-pointer hover:opacity-100";
          }}>
          Acasa
        </a>
        <a
          to="/CoffeeRoasters/AboutUs"
          className={({ isActive }) => {
            return isActive
              ? "opacity-100"
              : "opacity-55 cursor-pointer hover:opacity-100";
          }}>
          Despre noi
        </a>
        <a
          to="/CoffeeRoasters/CreateYourPlan"
          className={({ isActive }) => {
            return isActive
              ? "opacity-100"
              : "opacity-55 cursor-pointer hover:opacity-100";
          }}>
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
