export const MySkills = () => {
  return (
    <div className="p-8 sm:md:-mt-16 lg:mt-10">
      <div
        className="m-auto h-72 w-full bg-white py-10 text-center"
        id="myResume"
      >
        <p className="p-10">
          <span className="mb-3 text-4xl font-medium text-teal-600">
            Key Skills:
          </span>{" "}
        </p>
        <p className="mt-2 text-center font-pageFont font-light text-teal-600 sm:text-xl">
          Please feel free to contact me if you would like to see my complete
          skill set and Resume.
        </p>
        <p className="mt-2 text-center font-pageFont font-light text-teal-600 sm:text-xl">
          In the meantime, here are a few of the skills and languages I have
          used:
        </p>

        <ul className="mt-5 mb-3 grid grid-cols-2 sm:grid-cols-2">
          <div className="group flex-col font-pageFont text-teal-600 ">
            <li>React</li>
            <li>React Router</li>
            <li>React Redux</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Website Design</li>
          </div>
          <div className="group flex-col items-center font-pageFont text-teal-600">
            <li>App Design</li>
            <li>NextJS</li>
            <li>MirageJs</li>
            <li>UI Design</li>
            <li>HTML5</li>
            <li>Javascript(ES6)</li>
          </div>
        </ul>
      </div>
    </div>
  );
};
