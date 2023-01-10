import Image from "next/image";
import { Link } from "react-scroll/modules";
import { useState } from "react";

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <>
      {/*<nav className="fixed top-0 left-0 z-50 mb-3 flex w-full flex-wrap items-center justify-between rounded-b-lg bg-teal-600 py-3 py-3 px-2 font-pageFont shadow-xl">*/}
      {/*  <div className="container mx-auto flex flex-wrap justify-between px-4">*/}
      {/*    <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">*/}
      {/*      <Image*/}
      {/*        src="/Chef-hat.png"*/}
      {/*        width={70}*/}
      {/*        height={70}*/}
      {/*        alt="chef hat"*/}
      {/*        className="sm:m ml-5 animate-bounce"*/}
      {/*      />*/}
      {/*      <button*/}
      {/*        className="text-color-black block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"*/}
      {/*        type="button"*/}
      {/*        onClick={() => setNavbarOpen(!navbarOpen)}*/}
      {/*      >*/}
      {/*        <svg*/}
      {/*          xmlns="http://www.w3.org/2000/svg"*/}
      {/*          fill="none"*/}
      {/*          viewBox="0 0 24 24"*/}
      {/*          strokeWidth={1.5}*/}
      {/*          stroke="currentColor"*/}
      {/*          className="h-6 w-6"*/}
      {/*        >*/}
      {/*          <path*/}
      {/*            strokeLinecap="round"*/}
      {/*            strokeLinejoin="round"*/}
      {/*            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"*/}
      {/*          />*/}
      {/*        </svg>*/}
      {/*      </button>*/}
      {/*    </div>*/}

      {/*    <div*/}
      {/*      className={*/}
      {/*        "flex-grow place-content-center lg:flex " +*/}
      {/*        (navbarOpen ? " flex" : " hidden")*/}
      {/*      }*/}
      {/*      id="example-navbar-danger"*/}
      {/*    >*/}
      {/*      <ul className="flex list-none flex-col items-center gap-x-8 p-4 tracking-wide md:flex-row md:space-x-8 md:bg-teal-600 md:text-lg lg:ml-auto lg:flex-row lg:text-lg">*/}
      {/*        <li className="py-4 text-white duration-300 hover:scale-125">*/}
      {/*          <Link*/}
      {/*            className="outline-offset- block rounded hover:cursor-pointer"*/}
      {/*            to="home"*/}
      {/*            spy={true}*/}
      {/*            smooth={true}*/}
      {/*            offset={-150}*/}
      {/*            duration={100}*/}
      {/*          >*/}
      {/*            Home*/}
      {/*          </Link>*/}
      {/*        </li>*/}
      {/*        <li className="rounded-lg py-4 text-white duration-300 hover:scale-125">*/}
      {/*          <Link*/}
      {/*            className="outline-offset- block rounded hover:cursor-pointer"*/}
      {/*            to="aboutMe"*/}
      {/*            spy={true}*/}
      {/*            smooth={true}*/}
      {/*            offset={-150}*/}
      {/*            duration={100}*/}
      {/*          >*/}
      {/*            About Me*/}
      {/*          </Link>*/}
      {/*        </li>*/}
      {/*        <li className="py-4 text-white duration-300 hover:scale-125">*/}
      {/*          <Link*/}
      {/*            className="hover:cursor-pointer"*/}
      {/*            to="myProjects"*/}
      {/*            spy={true}*/}
      {/*            smooth={true}*/}
      {/*            offset={-90}*/}
      {/*            duration={100}*/}
      {/*          >*/}
      {/*            My Projects*/}
      {/*          </Link>*/}
      {/*        </li>*/}
      {/*        <li className="py-4 text-white duration-300 hover:scale-125">*/}
      {/*          <Link*/}
      {/*            className="block rounded hover:cursor-pointer"*/}
      {/*            to="myResume"*/}
      {/*            spy={true}*/}
      {/*            smooth={true}*/}
      {/*            offset={-100}*/}
      {/*            duration={100}*/}
      {/*          >*/}
      {/*            My Skills*/}
      {/*          </Link>*/}
      {/*        </li>*/}
      {/*        <button className="rounded-full py-4 px-7 text-sm tracking-wide text-white duration-300 hover:scale-110 hover:text-white sm:bg-teal-600 md:text-white lg:bg-white lg:text-black lg:hover:bg-[#F05307]">*/}
      {/*          <Link*/}
      {/*            to="sayHello"*/}
      {/*            spy={true}*/}
      {/*            smooth={true}*/}
      {/*            offset={-100}*/}
      {/*            duration={100}*/}
      {/*          >*/}
      {/*            SAY HELLO*/}
      {/*          </Link>*/}
      {/*        </button>*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</nav>*/}
      {/*Test Nav bar begins here!!*/}
      <nav className="fixed top-0 left-0 z-50 mb-3 flex w-full flex-wrap items-center justify-between rounded-b-lg bg-teal-600 py-3 py-3 px-2 font-pageFont shadow-xl">
        <div className="navbar-start">
          <Image
            src="/Chef-hat.png"
            width={70}
            height={70}
            alt="chef hat"
            className="sm:m ml-5 animate-bounce"
          />
        </div>
        <div className="navbar-center relative flex hidden w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <ul className="menu menu-horizontal items-center gap-x-8">
            <li className="py-4 text-white duration-300 hover:scale-125">
              <Link
                className="outline-offset- block rounded hover:cursor-pointer"
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
              >
                Home
              </Link>
            </li>
            <li className="rounded-lg py-4 text-white duration-300 hover:scale-125">
              <Link
                className="outline-offset- block rounded hover:cursor-pointer"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
              >
                About Me
              </Link>
            </li>
            <li className="py-4 text-white duration-300 hover:scale-125">
              <Link
                className="hover:cursor-pointer"
                to="myProjects"
                spy={true}
                smooth={true}
                offset={-90}
                duration={100}
              >
                My Projects
              </Link>
            </li>
            <li className="py-4 text-white duration-300 hover:scale-125">
              <Link
                className="block rounded hover:cursor-pointer"
                to="myResume"
                spy={true}
                smooth={true}
                offset={-50}
                duration={100}
              >
                My Skills
              </Link>
            </li>
            <button className="btn rounded-full duration-300 hover:scale-110 hover:text-white sm:bg-teal-600 md:text-white lg:bg-white lg:text-black lg:hover:bg-[#F05307]">
              <Link
                to="sayHello"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                SAY HELLO
              </Link>
            </button>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
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
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 space-x-4 bg-base-100 p-2 shadow"
          >
            <li className="rounded py-4 text-teal-600">
              <Link
                className="outline-offset- block rounded hover:cursor-pointer"
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
              >
                Home
              </Link>
            </li>
            <li className="rounded py-4 text-teal-600">
              <Link
                className="outline-offset- block rounded hover:cursor-pointer"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
              >
                About Me
              </Link>
            </li>
            <li className="rounded py-4 text-teal-600">
              <Link
                className="hover:cursor-pointer"
                to="myProjects"
                spy={true}
                smooth={true}
                offset={-90}
                duration={100}
              >
                My Projects
              </Link>
            </li>
            <li className="rounded py-4 text-teal-600">
              <Link
                className="block rounded hover:cursor-pointer"
                to="myResume"
                spy={true}
                smooth={true}
                offset={-90}
                duration={100}
              >
                My Skills
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
