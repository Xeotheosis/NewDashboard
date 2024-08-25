import React from "react";

const MainMenu = () => {
  return (
    <div
      id="main-container"
      className=" grid grid-cols-1 md:grid-cols-2 gap-4 h-screen w-full text-white lg:p-4 text-sm">
      <div className="grid grid-cols-2 grid-rows-5 gap-4">
        <div className="menu_item items-center relative group col-span-2">
          <div className="bg_glass translate-y-0 transition-all delay-100 group-hover:opacity-0 group-hover:-translate-y-8 group-hover:delay-50">
            <i class="fa-solid fa-faucet"></i>
          </div>
          <div className="group-hover:opacity-0">
            <p>Apa</p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full  grid grid-cols-3">
            <a
              href="https://www.youtube.com/watch?v=dY1-Skx4QBs&t=126s"
              target="_blank"
              className="flex flex-col justify-around items-center translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-50 hover:cursor-pointer">
              <i class="fa-solid fa-faucet text-base bg_glass group-hover:shadow-emerald-600"></i>
              Apa calda
            </a>
            <div className="flex flex-col justify-around items-center translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100 hover:cursor-pointer ">
              <i class="fa-solid fa-faucet text-base bg_glass"></i>
              Apa rece
            </div>
            <div className="flex flex-col justify-around items-center translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-150 hover:cursor-pointer ">
              <i class="fa-solid fa-faucet text-base bg_glass"></i>
              Apa pluviala
            </div>
          </div>
        </div>
        <div className="menu_item relative group col-span-2">
          <div className="bg_glass translate-y-0 transition-all delay-100 group-hover:opacity-0 group-hover:-translate-y-8 group-hover:delay-50 group-hover:bg-[#1b263b]">
            <i class="fa-solid fa-faucet text-base"></i>
          </div>
          <div className="group-hover:opacity-0">
            <p className="text-sm">Energie</p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full  grid grid-cols-2">
            <div className="flex flex-col justify-around items-center translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-50 hover:cursor-pointer">
              <i class="fa-solid fa-faucet bg_glass"></i>
              Energie scara
            </div>
            <div className="flex flex-col justify-around items-center translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100 hover:cursor-pointer">
              <i class="fa-solid fa-faucet bg_glass"></i>
              Energie lift
            </div>
          </div>
        </div>
        <div className="menu_item">
          {" "}
          <i class="fa-solid fa-file-invoice bg_glass"></i>Facturi
        </div>
        <div className="menu_item">
          <i class="fa-solid fa-hand-holding-dollar bg_glass"></i>
          Preturi
        </div>
        <div className="menu_item">
          <i class="fa-solid fa-highlighter bg_glass"></i>Editare
        </div>
        <div className="menu_item">
          <i class="fa-solid fa-sack-dollar bg_glass"></i>
          Cheltuieli
        </div>

        <div className="menu_item transition-all">
          <i class="fa-solid fa-fire-burner  bg_glass "></i>
          <h2 className="text-sm">Gaze</h2>
        </div>
        <div className="menu_item transition-all">
          <i class="fa-solid fa-cable-car bg_glass"></i>
          <h2>Service Lift</h2>
        </div>
      </div>

      {/* SECOND COLUMN */}

      <div className="grid grid-cols-2 grid-rows-5 gap-4">
        <div className="menu_item transition-all">
          <i class="fa-solid fa-hourglass-half bg_glass"></i>
          <h2>Restante</h2>
        </div>
        <div className="menu_item transition-all">
          <i class="fa-solid fa-fire bg_glass"></i>
          Caldura
        </div>

        <div className="menu_item transition-all ">
          <i class="fa-solid fa-chalkboard-user bg_glass "></i>
          <h2>Afise</h2>
        </div>
        <div className="menu_item transition-all ">
          <i class="fa-solid fa-clipboard-list bg_glass "></i>
          <h2>Centralizator</h2>
        </div>

        <div className="menu_item transition-all">
          <i class="fa-regular fa-rectangle-list bg_glass"></i>
          <h2>Formulare</h2>
        </div>
        <div className="menu_item transition-all ">
          <i class="fa-solid fa-chart-simple text-white bg_glass"></i>
          <h2>Consumuri</h2>
        </div>
        <div className="menu_item transition-all col-span-2">
          <i class="fa-solid fa-image bg_glass"></i>
          <h2>Altele</h2>
        </div>
        <div className="menu_item transition-all col-span-2">
          <i class="bx bxs-cog bg_glass"></i>
          Setari
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
