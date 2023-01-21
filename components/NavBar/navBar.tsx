import Image from "next/image";
import { Link } from "react-scroll/modules";
import { useState } from "react";

export const NavBar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 mb-3 flex w-full flex-wrap items-center justify-between bg-[#014F86] py-3 py-3 px-2 font-pageFont shadow-xl">
        <div className="navbar-start">
          <Image
            src="/Chef-Hat4.png"
            width={70}
            height={70}
            alt="chef hat"
            className="sm:m ml-5 animate-bounce"
          />
        </div>
        <div className="navbar relative flex hidden w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <ul className="menu menu-horizontal items-center gap-x-8">
            <li className="py-4 text-white duration-300 hover:scale-125">
              <Link
                className="outline-offset- block rounded hover:cursor-pointer lg:hover:bg-[#012A4A]"
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
              >
                Home
              </Link>
            </li>
            <li className="py-4 text-white duration-300 hover:scale-125">
              <Link
                className="outline-offset- block rounded hover:cursor-pointer lg:hover:bg-[#012A4A]"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-40}
                duration={100}
              >
                About Me
              </Link>
            </li>
            <li className="py-4 text-white duration-300 hover:scale-125">
              <Link
                className="rounded hover:cursor-pointer lg:hover:bg-[#012A4A]"
                to="myProjects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={100}
              >
                My Projects
              </Link>
            </li>
            <li className="py-4 text-white duration-300 hover:scale-125">
              <Link
                className="block rounded hover:cursor-pointer lg:hover:bg-[#012A4A]"
                to="myResume"
                spy={true}
                smooth={true}
                offset={-20}
                duration={100}
              >
                My Skills
              </Link>
            </li>
            <button className="btn rounded-full duration-300 hover:scale-110 hover:text-[#023020] lg:bg-white lg:text-black lg:hover:bg-emerald-300">
              <Link
                to="sayHello"
                spy={true}
                smooth={true}
                offset={-80}
                duration={100}
              >
                CONTACT ME
              </Link>
            </button>
          </ul>
        </div>

        {/*##### DROP DOWN MENU #####*/}
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 space-x-4 bg-[#012A4A] p-2 shadow"
          >
            <li className=" ml-4 rounded py-4 text-white">
              <Link
                className="outline-offset- block rounded hover:cursor-pointer hover:bg-emerald-300 hover:text-black"
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
              >
                Home
              </Link>
            </li>
            <li className="rounded py-4 text-white">
              <Link
                className="outline-offset- block rounded hover:cursor-pointer hover:bg-emerald-300 hover:text-black"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
              >
                About Me
              </Link>
            </li>
            <li className="rounded py-4 text-white">
              <Link
                className="hover:cursor-pointer hover:bg-emerald-300 hover:text-black"
                to="myProjects"
                spy={true}
                smooth={true}
                offset={-90}
                duration={100}
              >
                My Projects
              </Link>
            </li>
            <li className="rounded py-4 text-white">
              <Link
                className="block rounded hover:cursor-pointer hover:bg-emerald-300 hover:text-black"
                to="myResume"
                spy={true}
                smooth={true}
                offset={-90}
                duration={100}
              >
                My Skills
              </Link>
            </li>
            <li className="rounded py-4 text-white">
              <Link
                className="block rounded hover:cursor-pointer hover:bg-emerald-300 hover:text-black"
                to="sayHello"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
