import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 z-50 mb-3 flex w-full flex-wrap items-center justify-between bg-teal-600 py-3 py-3 px-2 font-pageFont">
      <div className="container mx-auto flex flex-wrap justify-between px-4">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <Image
            src="/Chef-hat.png"
            width={70}
            height={70}
            alt="chef hat"
            className="sm:m ml-5 animate-bounce"
          />
          <button
            className="text-color-black block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
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
          </button>
        </div>
        <div
          className={
            "flex-grow place-content-center lg:flex" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex list-none flex-col items-center gap-x-8 p-4 tracking-wide md:flex-row md:space-x-8 md:border-0 md:bg-teal-600 md:text-lg lg:ml-auto lg:flex-row lg:text-lg">
            <li className="py-4 text-white duration-300 hover:scale-125">
              <Link
                className="block rounded hover:cursor-pointer"
                href="/#aboutMe"
              >
                About Me
              </Link>
            </li>
            <li className="py-4 text-white duration-300 hover:scale-125">
              <Link className="hover:cursor-pointer" href="/#myProjects">
                My Projects
              </Link>
            </li>
            <li className="py-4 text-white duration-300 hover:scale-125">
              <Link
                className="block rounded hover:cursor-pointer"
                href="/#myResume"
              >
                My Resume
              </Link>
            </li>
            <button className="rounded-full py-4 px-7 text-sm tracking-wide text-white duration-300 hover:scale-110 hover:text-white sm:bg-teal-600 md:text-white lg:bg-white lg:text-black lg:hover:bg-[#F05307]">
              <Link href="/#sayHello">SAY HELLO</Link>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
