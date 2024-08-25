import React, { useState } from "react";

const Header = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isSideBarExpanded, setSideBarExpanded] = useState(false);

  const menuItems = [
    {
      icon: "bx bxs-dashboard",
      label: "Acasa",
      href: "#",
    },
    {
      icon: "bx bxs-info-circle",
      label: "Info",
      href: "#",
    },
    { icon: "bx bx-dollar-circle", label: "Cheltuieli", href: "#Login.aspx" },
    { icon: "bx bxs-file-pdf", label: "Rapoarte", href: "#" },
    { icon: "bx bx-buildings", label: "Apartamente", href: "#" },
    { icon: "bx bxs-cog", label: "Setari", href: "#" },
  ];

  return (
    <header className="w-full sticky top-4 z-50 lg:p-4 lg:w-fit lg:h-screen lg:py-4">
      <nav
        className={`h-full w-full flex flex-col gap-4 bg_main-colour_blue shadow-md transition-all lg:justify-between rounded-lg duration-300 ease-in-out`}>
        <div className="hidden lg:flex p-4 justify-between items-center">
          <div className="flex gap-2 items-center text-xl transition-all">
            <i className="bx bx-bar-chart-alt text-3xl text-white"></i>
            <h1
              className={`text-2xl text-white ${
                isSideBarExpanded ? "block" : "hidden"
              }`}>
              AsPropManager
            </h1>
          </div>
        </div>
        <ul
          className={`flex p-2 lg:flex-col gap-2 w-full lg:w-full lg:items-center lg:justify-center ${
            isSideBarExpanded ? "items-start" : "items-center"
          } lg:py-4`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveItem(index)}
              className={`relative group flex gap-4 items-center text-white  p-2 ${
                isSideBarExpanded ? "" : "justify-center"
              } w-full rounded-md cursor-pointer transition-colors ${
                activeItem === index
                  ? "bg_glass"
                  : "hover:bg_main-colour-light_blue"
              }`}>
              <a
                href={item.href}
                className="flex items-center gap-4">
                <i className={`${item.icon} text-2xl`}></i>
                <span
                  className={`text-lg ${
                    isSideBarExpanded ? "block" : "hidden"
                  }`}>
                  {item.label}
                </span>
                {activeItem === index && (
                  <div
                    className={`absolute right-0 top-2 w-2 h-2 rounded bg_secondary_colour_lightest_purple ${
                      isSideBarExpanded ? "" : "block"
                    }`}></div>
                )}
                {!isSideBarExpanded && (
                  <div
                    className={`absolute z-50 left-full rounded-md px-2 py-1 bg-slate-100 text-black text-sm invisible opacity-0 -translate-x-3 transition-all lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:translate-x-0`}>
                    {item.label}
                  </div>
                )}
              </a>
            </li>
          ))}
          <li
            onClick={() => setSideBarExpanded((prev) => !prev)}
            className={`hidden lg:flex items-center w-full relative p-2 
              rounded-md text-white hover:cursor-pointer ${
                isSideBarExpanded ? "justify-end" : "justify-center"
              }`}>
            <i
              className={`bx bx-chevron-left-square text-3xl transition-transform ${
                isSideBarExpanded ? "" : "rotate-180"
              }`}></i>
          </li>
        </ul>
        <div
          className={`hidden lg:flex p-3 ${
            isSideBarExpanded ? "" : "justify-center"
          }`}>
          <div className=" bg_secondary_colour_lightest_purple p-4 rounded-full"></div>
          <div
            className={`flex justify-between items-center w-52 ml-3 ${
              isSideBarExpanded ? "" : "hidden"
            }`}>
            <div className="leading-4">
              <h4 className="text-white">John Doe</h4>
              <span className="text-xs text-gray-100">johndoe@gmail.com</span>
            </div>
            <i className="fa-solid fa-ellipsis-vertical text-white"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
