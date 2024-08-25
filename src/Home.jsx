import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./HeaderForHome";
import Menu from "./Menu";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenuView = () => {
    setMenu(!menu);
  };

  return (
    <section className="h-auto bg-gray-100 p-4 lg:max-w-7xl lg:mx-auto">
      <Header toggleMenuView={toggleMenuView} />
      {menu && (
        <Menu
          menu={menu}
          toggleMenuView={toggleMenuView}
        />
      )}

      <section className="h-full text-center md:text-left lg:px-10">
        <section
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          id="hero"
          className="h-[31rem] rounded-2xl flex justify-center md:justify-start">
          <div className="flex flex-col  gap-5 justify-center items-center md:items-start px-3 w-full md:text-left md:w-3/6 md:px-14 xl:w-2/6">
            <h1 className="text-5xl text-[#FEFCF7] font-bold poppins w-[14ch]">
              Facturi gestionate eficient, simplu
            </h1>
            <p className="text-white roboto opacity-75">
              Start your morning with the world's best coffees. Try our expertly
              curated artisan coffees from our best roasters delivered directly
              to your door, at your schedule.
            </p>

            <a className="bg-indigo-100 w-full rounded-xl p-4 poppins font-bold hover:wobble-hor-bottom transition-all delay-75 xl:w-full xl:max-w-[13rem] button-wobble ">
              Login
            </a>
          </div>
        </section>
        <div className="gradient-our-collection">
          <h2 className="font-bold fraunces text-5xl md:text-8xl text-center my-10">
            our collection
          </h2>
        </div>

        <section
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          className="mt-20 flex flex-col items-center gap-10 md:-mt-20 lg:flex-row lg:w-4/5 mx-auto">
          <div className="md:flex md:items-start md:w-2/3 lg:flex-col lg:text-center">
            <div className="flex justify-center"></div>
            <div>
              <h3 className="font-bold text-2xl fraunces my-5">
                Gran Espresso
              </h3>
              <p className="barlow">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </div>

          <div className="md:flex md:items-start md:w-2/3 lg:flex-col lg:text-center">
            <div className="flex justify-center"></div>
            <div>
              <h3 className="font-bold text-2xl fraunces my-5">Planato</h3>
              <p className="barlow">
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
          </div>

          <div className="md:flex md:items-start md:w-2/3 lg:flex-col lg:text-center">
            <div className="flex justify-center"></div>
            <div>
              <h3 className="font-bold text-2xl fraunces my-5">Picollo</h3>
              <p className="barlow">
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry
              </p>
            </div>
          </div>

          <div className="md:flex md:items-start md:w-2/3 lg:flex-col lg:text-center">
            <div className="flex justify-center"></div>
            <div>
              <h3 className="font-bold text-2xl fraunces my-5">Danche</h3>
              <p className="barlow">
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </div>
        </section>

        {/* THIRD PART */}

        <section className=" text-white mt-20  md:h-full">
          <div className=" h-[50rem] md:h-[40rem] lg:h-[35rem] bg-secondary-color rounded-lg p-8">
            <div className="w-full mx-auto lg:w-3/6 ">
              <h4 className="fraunces font-bold text-4xl text-center my-10 lg:text-5xl">
                Why choose us?
              </h4>
              <p className="barlow opacity-75 my-10 text-center lg:text-xl">
                A large part of our role is choosing which particular coffees
                will be featured in our range. This means working closely with
                the best coffee growers to give you a more impactful experience
                on every level.
              </p>
            </div>
          </div>
          <div className="p-8 -mt-[30rem] md:-mt-[25rem] lg:-mt-[15rem]">
            <div className="flex flex-col gap-8 items-center lg:flex-row lg:items-stretch ">
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                className="flex flex-col items-center gap-8 bg-cyan px-6 rounded-lg py-14 md:flex-row md:w-4/5 lg:flex-col lg:text-center">
                <div>
                  <h5 className="fraunces font-bold text-2xl">Best Quality</h5>
                  <p className="barlow">
                    Discover an endless variety of the world's best artisan
                    coffee from each of our roasters.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-easing="ease-in-sine"
                className="flex flex-col items-center gap-8 bg-cyan px-6 rounded-lg py-14 md:flex-row md:w-4/5 lg:flex-col lg:text-center">
                <div>
                  <h5 className="fraunces font-bold text-2xl">
                    Exclusive benefits
                  </h5>
                  <p className="barlow">
                    Special offers and swag when you subscribe, including 30%
                    off your first shipment.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-easing="ease-in-sine"
                className="flex flex-col items-center gap-8 bg-cyan px-6 rounded-lg py-14  md:flex-row md:w-4/5 lg:flex-col lg:text-center">
                <div>
                  <h5 className="fraunces font-bold text-2xl">Free shipping</h5>
                  <p className="barlow">
                    We cover the cost and coffee is delivered fast. Peak
                    freshness: guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h4 className="fraunces text-3xl font-bold opacity-50 my-20">
            Pasi de urmat
          </h4>

          <div
            data-aos="zoom-in"
            className="flex flex-col items-center md:flex-row md:w-4/5">
            <div
              id="test"
              className="flex flex-col gap-5 pr-5 relative before:hidden md:before:block before:absolute before:left-0 before:-top-10 before:p-2 before:rounded-full before:border-2  before:border-green-700 before:bg-[#FEFCF7] before:z-10 after:hidden md:after:block after:absolute after:-top-8 after:left-0 after:h-1 after:w-full after:bg-[#FDD6BA]">
              <span className="text-6xl fraunces font-bold text-color-orange">
                01
              </span>
              <h6 className="fraunces text-3xl font-bold">
                Contacteaza-ne <br />
                online
              </h6>
              <p className="barlow">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>

            <div className="flex flex-col gap-5 relative pr-5 before:hidden md:before:block before:absolute before:left-0 before:-top-10 before:p-2 before:rounded-full before:border-2  before:border-green-700 before:bg-[#FEFCF7] before:z-10 after:hidden md:after:block after:absolute after:-top-8 after:left-0 after:h-1 after:w-full after:bg-[#FDD6BA]">
              <span className="text-6xl fraunces font-bold text-color-orange">
                02
              </span>
              <h6 className="fraunces text-3xl font-bold">
                Choose the <br />
                frequency
              </h6>
              <p className="barlow">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>

            <div className="flex flex-col gap-5 relative before:hidden md:before:block before:absolute before:left-0 before:-top-10 before:p-2 before:rounded-full before:border-2  before:border-green-700 before:bg-[#FEFCF7] before:z-10">
              <span className="text-6xl fraunces font-bold text-color-orange">
                03
              </span>
              <h6 className="fraunces text-3xl font-bold">
                Receive and
                <br /> enjoy!
              </h6>
              <p className="barlow">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>
          </div>
        </section>

        <a className="bg-indigo-100  w-2/3 rounded-xl my-20 p-4 text-white fraunces font-bold hover:bg-[#66D2CF] transition-all delay-75 max-w-56 button-wobble">
          Create your plan
        </a>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
