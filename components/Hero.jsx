import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#9D4edd] font-bold p-2 uppercase">
          Solutie pentru asociatii
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Management Eficient
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Rapid, Flexibil, Simplu
          </p>
        </div>
        <p className="md:text-2xl  md:pl-4 text-xl font-bold text-gray-500">
          Gestioneaza datele oriunde ai fi
        </p>
        <div className="w-full flex justify-center py-4">
          <a className="p-4 w-48 bg-[#9D4edd] rounded-md font-medium text-center h-18 hover:cursor-pointer">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
