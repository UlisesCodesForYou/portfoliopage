import Image from "next/image";

export const MySkills = () => {
  return (
    <>
      <section className="mt-20 bg-sky-50 pt-24 " id="myResume">
        <div className="relative flex items-center py-5">
          <div className="m-3 flex-grow border-t border-gray-400"></div>
          <span className="mx-4 flex-shrink font-pageFont text-4xl text-gray-600">
            My Skills
          </span>
          <div className="m-3 flex-grow border-t border-gray-400"></div>
        </div>
        <div className="-mt-4 bg-opacity-10 py-10 md:lg:xl:px-20">
          <div className="group grid grow grid-cols-1 md:justify-items-center md:lg:xl:grid-cols-2">
            {/*######## FRONT END DEV CARD ########*/}
            <div className="m-4 my-20 max-w-md rounded-lg bg-white py-4 px-8 shadow-lg">
              <div className="-mt-16 flex justify-center">
                <Image
                  className="h-26 w-26 rounded-full border-2 border-[#013A63] object-cover"
                  src="/Developer-Logo.png"
                  alt="Developer logo"
                  width={100}
                  height={100}
                />
              </div>

              <div>
                <h1 className="mt-4 text-center text-3xl font-semibold text-gray-800">
                  Front End Developer
                </h1>

                <h2 className="text-md mt-4 text-center font-semibold text-gray-500">
                  I like to create products/experiences people will enjoy.
                </h2>

                <h1 className="mt-10 text-center text-xl font-semibold text-gray-800">
                  Here are some of the languages I speak:
                </h1>

                <div className="card-actions mt-4 justify-center">
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    HTML 5
                  </div>
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    Javascript(ES6)
                  </div>
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    CSS3
                  </div>
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    React
                  </div>
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    NextJS
                  </div>
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    Typescript
                  </div>
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    Tailwind CSS
                  </div>
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    Mantine
                  </div>
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    SASS
                  </div>
                </div>
              </div>
              <h2 className="mt-10 text-center text-xl font-semibold text-gray-800">
                Dev tools I use:
              </h2>

              <div className="card-actions mt-4 justify-center">
                <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                  Daisy UI
                </div>
                <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                  WebStorm
                </div>
                <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                  VS Code
                </div>
                <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                  Flowbite
                </div>
                <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                  Slack
                </div>
                <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                  GitHub
                </div>
                <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                  GitKrakken
                </div>
                <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                  Git
                </div>
              </div>
            </div>

            {/*####### UI DESIGN CARD #######*/}
            <div className="m-4 my-20 max-w-md rounded-lg bg-white py-4 px-8 shadow-lg">
              <div className="-mt-16 flex justify-center">
                <Image
                  className="h-26 w-26 rounded-full border-2 border-[#013A63] object-cover"
                  src="/Designer-Logo.png"
                  alt="Developer logo"
                  width={100}
                  height={100}
                />
              </div>

              <div>
                <h1 className="mt-4 text-center text-3xl font-semibold text-gray-800">
                  UI Designer
                </h1>

                <h2 className="text-md mt-4 text-center font-semibold text-gray-500">
                  Besides creating, I also design UI interfaces.
                </h2>

                <h2 className="mt-4 text-center text-xl font-semibold text-gray-800">
                  Design tools I use:
                </h2>

                <div className="card-actions mt-4 justify-center">
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    Canva
                  </div>
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    Figma
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
