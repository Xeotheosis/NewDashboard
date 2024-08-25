import React from "react";

const Menu = ({ toggleMenuView }) => {
  return (
    <>
      <section className="fixed inset-0 mt-20 z-10 h-screen w-full menu">
        <div className="flex justify-center items-center text-center">
          <ul className="flex flex-col gap-10 font-bold fraunces text-3xl">
            <a to="/CoffeeRoasters/Home">Acasa</a>
            <a
              to="/CoffeeRoasters/AboutUs"
              onClick={toggleMenuView}>
              Despre Noi
            </a>
            <a
              to="/CoffeeRoasters/CreateYourPlan"
              onClick={toggleMenuView}>
              Contact
            </a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Menu;
