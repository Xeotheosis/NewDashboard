import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#9D4edd] font-bold uppercase">
            Dashboard pentru gestionarea datelor
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 capitalize">
            Facturi generate imediat
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <a className="p-4 w-48 bg-[#9D4edd] rounded-md font-medium text-center max-h-18 hover:cursor-pointer my-4 text-white">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
