import { useState } from "react";

import {
  BiSolidDog,
  BiUser,
  BiMenu,
  BiChevronLeft,
  BiHistory,
} from "react-icons/bi";

import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      >
        <span className="sr-only">Open sidebar</span>
        <BiMenu className="h-6 w-6 text-gray-500" />
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <div
            className={`h-14 flex mb-6 items-center ${
              isOpen ? "justify-between" : "justify-center"
            }`}
          >
            <img
              className={`w-14 ${isOpen ? "ml-2" : null}`}
              src="src\assets\AmiVet.webp"
              alt="AmiVet"
            />
            {isOpen ? (
              <button
                className="p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                onClick={toggleSidebar}
              >
                <BiChevronLeft className="h-6 w-6 text-gray-500" />
              </button>
            ) : null}
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <BiSolidDog className="h-6 w-6 text-gray-500" />
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-500">
                  Mascotas
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/Owner"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <BiUser className="h-6 w-6 text-gray-500" />
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-500">
                  Dueños
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/Service"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <BiHistory className="h-6 w-6 text-gray-500" />
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-500">
                  Historial de Servicios
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
