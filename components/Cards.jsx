import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$1</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Gestionare singur</p>
            <p className="py-2 border-b mx-8">1 Utilizator</p>
            <p className="py-2 border-b mx-8">Pana la 30 de facturi</p>
          </div>
          <button className="bg-[#9D4edd] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Alege
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$5</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Gestionare cu ajutor</p>
            <p className="py-2 border-b mx-8">1 Utilizator Admin</p>
            <p className="py-2 border-b mx-8">Facturi nelimitate</p>
          </div>
          <button className="bg-[#9D4edd] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Alege
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Asociatie</h2>
          <p className="text-center text-4xl font-bold">$10</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Suport 24/7</p>
            <p className="py-2 border-b mx-8">3 Utilizatori Admini</p>
            <p className="py-2 border-b mx-8">Facturi nelimitate</p>
          </div>
          <button className="bg-[#9D4edd] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Alege
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
