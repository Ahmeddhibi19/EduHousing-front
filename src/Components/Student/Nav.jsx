import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {} from '@coreui/icons-react';

import {
  faBars,
  faHouse,
  faArrowLeft,
  faTimes,
  faUser,
  faStar,
  faHistory,
  faCodePullRequest,
  faCog,
  faInfoCircle,
  faAddressCard,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft, faArrowRightFromBracket } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from "react-router-dom";
const profileImage = require("../../Assets/DAB03919-10470989.webp");

const Nav = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menu, setMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [menuActiveItem, setMenuActiveItem] = useState(0);

  const handleMenuClick = (index) => {
    setMenuActiveItem(index)
  }

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMenu = () => {
    setMenu((prev) => !prev);
    console.log(menu);
  };

  return (
    <div className="w-screen h-full flex flex-col">
      <div className="w-screen h-[60px] fixed bg-customGray flex flex-row justify-between items-center px-[60px] z-10">
        <FontAwesomeIcon
          icon={faBars}
          className="visible sm:visible md:visible lg:hidden -ml-7"
          onClick={() => handleMenu()}
        />
        <div className=" flex flex-row items-center justify-between">
          <FontAwesomeIcon icon={faHouse} className="text-submiButton mr-2" />
          <p className="font-bold text-[20px]  text-submiButton hidden sm:hidden md:inline lg:inline">
            EduHousing
          </p>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="bg-white w-[200px] sm:w-[200px] md:w-[250px] lg:w-[300px] rounded-xl px-3 focus:outline-green-500 focus:border-green-500"
        />
        <div className=" flex flex-row items-center justify-between  rounded-md px-3 cursor-pointer hover:bg-submiButton hover:text-white ml-[400px] text-gray-600">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className=" hover:text-white mr-2  hidden sm:hidden md:inline lg:inline"
          />
          <p className="text-[20px]   hidden sm:hidden md:inline lg:inline">

            Logout
          </p>
        </div>
        <div className=" hidden flex-row items-center justify-between  rounded-md px-3  py-2 sm:hidden lg:flex">
          <img
            src={profileImage}
            alt=""
            className="w-[30px] h-[30px] rounded-full hidden sm:hidden md:inline lg:inline mr-2"
          />
          <p className="hidden sm:hidden md:inline lg:inline"> Ahmed Dhibi</p>
        </div>
      </div>
      {menu ? (
        <div className="fixed w-screen h-[900px] z-50 bg-black bg-opacity-35 flex justify-start ">
          <div className="w-[70%] h-full bg-white">
            <div className="w-full h-[100px] flex items-center justify-end">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-[30px] mr-[20px]"
                onClick={() => setMenu(false)}
              />
            </div>
            <ul>
              <li className="flex flex-row items-center ml-6 mb-6">
                <img
                  src={profileImage}
                  alt=""
                  className="w-[50px] h-[50px] rounded-md  "
                />
                <div className="flex flex-col ml-4">
                  <p className="font-bold">Ahmed Dhibi</p>
                  <p className="text-gray-500">adhibi345@gmail.com</p>
                  <p className="text-gray-500">Enit</p>
                </div>
              </li>
              <li className={`flex flex-row items-center ml-6 mb-3 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${menuActiveItem === 0 ? '  bg-submiButton rounded-md  mr-1' : ''}`}
                onClick={() => handleMenuClick(0)}>
                <NavLink to={props.home} onClick={() => setMenu(false)} className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faHouse} className={` ${menuActiveItem === 0 ? ' text-white   ' : ''}`} />
                  <p className={` ml-4 ${menuActiveItem === 0 ? ' text-white   ' : ''}`}>Home</p>
                </NavLink>

              </li>
              <li className={`flex flex-row items-center ml-6 mb-3 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${menuActiveItem === 1 ? '  bg-submiButton rounded-md  mr-1' : ''}`}
                onClick={() => handleMenuClick(1)}>
                <NavLink to={props.account} onClick={() => setMenu(false)} className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faUser} className={` ${menuActiveItem === 1 ? ' text-white   ' : ''}`} />
                  <p className={` ml-4 ${menuActiveItem === 1 ? ' text-white   ' : ''}`}>Account</p>
                </NavLink>

              </li>


              <li className={`flex flex-row items-center ml-6 mb-3 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${menuActiveItem === 2 ? '  bg-submiButton rounded-md  mr-1' : ''}`}
                onClick={() => handleMenuClick(2)}>
                <NavLink to={props.contacts} onClick={() => setMenu(false)} className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faUserGroup} className={` ${menuActiveItem === 2 ? ' text-white   ' : ''}`} />
                  <p className={` ml-4 ${menuActiveItem === 2 ? ' text-white   ' : ''}`}>Contacts</p>
                </NavLink>

              </li>


              <li className={`flex flex-row items-center ml-6 mb-3 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${menuActiveItem === 3 ? '  bg-submiButton rounded-md  mr-1' : ''}`}
                onClick={() => handleMenuClick(3)}>
                <NavLink to={props.favourites} onClick={() => setMenu(false)} className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faStar} className={` ${menuActiveItem === 3 ? ' text-white   ' : ''}`} />
                  <p className={` ml-4 ${menuActiveItem === 3 ? ' text-white   ' : ''}`}>Favourites</p>
                </NavLink>

              </li>
              <li className={`flex flex-row items-center ml-6 mb-3 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${menuActiveItem === 4 ? '  bg-submiButton rounded-md  mr-1' : ''}`}
                onClick={() => handleMenuClick(4)}>
                <NavLink to={props.rentalHistory} onClick={() => setMenu(false)} className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faHistory} className={` ${menuActiveItem === 4 ? ' text-white   ' : ''}`} />
                  <p className={` ml-4 ${menuActiveItem === 4 ? ' text-white   ' : ''}`}>Rental History</p>
                </NavLink>

              </li>
              <li className={`flex flex-row items-center ml-6 mb-3 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${menuActiveItem === 5 ? '  bg-submiButton rounded-md  mr-1' : ''}`}
                onClick={() => handleMenuClick(5)}>
                <NavLink to={props.requests} onClick={() => setMenu(false)} className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faCodePullRequest} className={` ${menuActiveItem === 5 ? ' text-white   ' : ''}`} />
                  <p className={` ml-4 ${menuActiveItem === 5 ? ' text-white   ' : ''}`}>My Requests</p>
                </NavLink>

              </li>
              <li className={`flex flex-row items-center ml-6 mb-3 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${menuActiveItem === 6 ? '  bg-submiButton rounded-md  mr-1' : ''}`}
                onClick={() => handleMenuClick(6)}>
                <NavLink to={props.settings} onClick={() => setMenu(false)} className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faCog} className={` ${menuActiveItem === 6 ? ' text-white   ' : ''}`} />
                  <p className={` ml-4 ${menuActiveItem === 6 ? ' text-white   ' : ''}`}>Settings</p>
                </NavLink>
              </li>
              <li className={`flex flex-row items-center ml-6 mb-3 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${menuActiveItem === 7 ? '  bg-submiButton rounded-md  mr-1' : ''}`}
                onClick={() => handleMenuClick(7)}>
                <NavLink to={props.help} onClick={() => setMenu(false)} className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faInfoCircle} className={` ${menuActiveItem === 7 ? ' text-white   ' : ''}`} />
                  <p className={` ml-4 ${menuActiveItem === 7 ? ' text-white   ' : ''}`}>Help </p>
                </NavLink>

              </li>
              <li className={`flex flex-row items-center ml-6 mb-3 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${menuActiveItem === 8 ? '  bg-submiButton rounded-md  mr-1' : ''}`}
                onClick={() => handleMenuClick(8)}>
                <NavLink to={props.aboutUs} onClick={() => setMenu(false)} className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faAddressCard} className={` ${menuActiveItem === 8 ? ' text-white   ' : ''}`} />
                  <p className={` ml-4 ${menuActiveItem === 8 ? ' text-white   ' : ''}`}>About us </p>
                </NavLink>

              </li>
            </ul>
          </div>
        </div>
      ) : null}
      <div className="w-[20%] h-[700px] fixed top-[63px] bg-customGray hidden sm:hidden md:hidden lg:inline">
        <ul className=" mt-[50px]">
          <li className={`flex flex-row items-center ml-6 mb-6 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${activeItem === 0 ? '  bg-submiButton rounded-md   ' : ''}`}
            onClick={() => handleItemClick(0)}
          >
            <NavLink to={props.home} className="flex flex-row items-center">
              <FontAwesomeIcon icon={faHouse} className={` ${activeItem === 0 ? ' text-white   ' : ''}`} />
              <p className={` ml-4 ${activeItem === 0 ? ' text-white   ' : ''}`}>Home</p>
            </NavLink>

          </li>
          <li className={`flex flex-row items-center ml-6 mb-6 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${activeItem === 1 ? 'bg-submiButton rounded-md text-white' : ''}`}
            onClick={() => handleItemClick(1)}
          >
            <NavLink to={props.account} className="flex flex-row items-center">
              <FontAwesomeIcon icon={faUser} className={` ${activeItem === 1 ? ' text-white   ' : ''}`} />
              <p className={` ml-4 ${activeItem === 1 ? ' text-white   ' : ''}`}>Account</p>
            </NavLink>

          </li>
          <li className={`flex flex-row items-center ml-6 mb-6 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${activeItem === 2 ? 'bg-submiButton rounded-md text-white' : ''}`}
            onClick={() => handleItemClick(2)}
          >
            <NavLink to={props.favourites} className="flex flex-row items-center">
              <FontAwesomeIcon icon={faStar} className={` ${activeItem === 2 ? ' text-white   ' : ''}`} />
              <p className={` ml-4 ${activeItem === 2 ? ' text-white   ' : ''}`}>Favourites</p>
            </NavLink>

          </li>
          <li className={`flex flex-row items-center ml-6 mb-6 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${activeItem === 3 ? 'bg-submiButton rounded-md text-white' : ''}`}
            onClick={() => handleItemClick(3)}
          >
            <NavLink to={props.rentalHistory} className="flex flex-row items-center">
              <FontAwesomeIcon icon={faHistory} className={` ${activeItem === 3 ? ' text-white   ' : ''}`} />
              <p className={` ml-4 ${activeItem === 3 ? ' text-white   ' : ''}`}>Rental History</p>
            </NavLink>

          </li>
          <li className={`flex flex-row items-center ml-6 mb-6 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${activeItem === 4 ? 'bg-submiButton rounded-md text-white' : ''}`}
            onClick={() => handleItemClick(4)}
          >
            <NavLink to={props.requests} className="flex flex-row items-center">
              <FontAwesomeIcon icon={faCodePullRequest} className={` ${activeItem === 4 ? ' text-white   ' : ''}`} />
              <p className={` ml-4 ${activeItem === 4 ? ' text-white   ' : ''}`}>My Requests</p>
            </NavLink>

          </li>
          <li className={`flex flex-row items-center ml-6 mb-6 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${activeItem === 5 ? 'bg-submiButton rounded-md text-white' : ''}`}
            onClick={() => handleItemClick(5)}
          >
            <NavLink to={props.settings} className="flex flex-row items-center">
              <FontAwesomeIcon icon={faCog} className={` ${activeItem === 5 ? ' text-white   ' : ''}`} />
              <p className={` ml-4 ${activeItem === 5 ? ' text-white   ' : ''}`}>Settings</p>
            </NavLink>

          </li>
          <li className={`flex flex-row items-center ml-6 mb-6 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${activeItem === 6 ? 'bg-submiButton rounded-md text-white' : ''}`}
            onClick={() => handleItemClick(6)}
          >
            <NavLink to={props.help} className="flex flex-row items-center">
              <FontAwesomeIcon icon={faInfoCircle} className={` ${activeItem === 6 ? ' text-white   ' : ''}`} />
              <p className={` ml-4 ${activeItem === 6 ? ' text-white   ' : ''}`}>Help </p>
            </NavLink>

          </li>
          <li className={`flex flex-row items-center ml-6 mb-6 pl-2 py-2 text-gray-600 hover:bg-submiButton hover:rounded-md cursor-pointer hover:text-white ${activeItem === 7 ? 'bg-submiButton rounded-md text-white' : ''}`}
            onClick={() => handleItemClick(7)}
          >
            <NavLink to={props.aboutUs} className="flex flex-row items-center">
              <FontAwesomeIcon icon={faAddressCard} className={` ${activeItem === 7 ? ' text-white   ' : ''}`} />
              <p className={` ml-4 ${activeItem === 7 ? ' text-white   ' : ''}`}>About us </p>
            </NavLink>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
