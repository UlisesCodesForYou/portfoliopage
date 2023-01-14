import Image from "next/image";
import NavBar from "@components/NavBar";
import Hero from "@components/Hero";
import AboutMe from "@components/AboutMe";
import MyProjects from "@components/MyProjects";

const MySkills = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <MyProjects />

      {/*<div className="p-7 sm:md:-mt-16 lg:mt-10">*/}
      {/*  <div*/}
      {/*    className="m-auto h-72 w-full bg-white py-10 text-center"*/}
      {/*    id="myResume"*/}
      {/*  >*/}
      {/*    <p className="p-10">*/}
      {/*      <span className="mb-3 text-4xl font-medium text-teal-600">*/}
      {/*        Front End Deverloper*/}
      {/*      </span>{" "}*/}
      {/*    </p>*/}
      {/*    <p className="mt-2 text-center font-pageFont font-light text-teal-600 sm:text-xl">*/}
      {/*      I like to code from scratch when possible. Just like cooking, I*/}
      {/*      enjoy seeing my creation come to life and that others will enjoy*/}
      {/*    </p>*/}
      {/*    <p className="mt-2 text-center font-pageFont font-light text-teal-600 sm:text-xl">*/}
      {/*      Here are some of the languages I speak:*/}
      {/*    </p>*/}

      {/*    <ul className="mt-5 mb-3 grid grid-cols-1 sm:grid-cols-2">*/}
      {/*      <div className="group flex-col font-pageFont text-teal-600 ">*/}
      {/*        <li>React</li>*/}
      {/*        <li>TypeScript</li>*/}
      {/*        <li>Tailwind CSS</li>*/}
      {/*        <li>NextJS</li>*/}
      {/*        <li>HTML5</li>*/}
      {/*        <li>Javascript(ES6)</li>*/}
      {/*      </div>*/}
      {/*      <div className="group flex-col items-center font-pageFont text-teal-600">*/}
      {/*        <li>App Design</li>*/}

      {/*        <li>MirageJs</li>*/}
      {/*        <li>UI Design</li>*/}
      {/*      </div>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*<br />*/}
    </>
  );
};

export default MySkills;
