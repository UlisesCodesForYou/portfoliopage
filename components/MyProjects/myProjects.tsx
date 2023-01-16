import Image from "next/image";
import Link from "next/link";

export const MyProjects = () => {
  return (
    <>
      <section
        className="sm:m -mb-20 mt-8 bg-white pb-16 pt-8 md:mt-16 md:lg:pb-28 lg:mt-20"
        id="myProjects"
      >
        <div className="relative flex items-center py-5">
          <div className="m-3 flex-grow border-t border-gray-400"></div>
          <span className="mx-4 flex-shrink font-pageFont text-4xl text-gray-600">
            My Projects
          </span>
          <div className="m-3 flex-grow border-t border-gray-400"></div>
        </div>

        {/*###### WORK SECTION #######*/}
        <div className="mt-2 bg-opacity-10 py-10 md:lg:xl:px-20">
          <div className="group ml-4 grid grow grid-cols-1 md:justify-items-center md:lg:xl:grid-cols-3 lg:ml-3">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <Image
                  src="/Cutlery-Corner.png"
                  width={500}
                  height={800}
                  alt="cutlery store"
                  className="-mb-1 transform rounded-lg"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mb-4 mt-4 text-xl text-gray-600">
                  Cutlery Corner
                </h2>
                <p className="mb-3 text-gray-600">
                  {" "}
                  As a former chef, I thought it would be fun to create a
                  cutlery store. This is a static website with functioning tabs.
                  This is my first completed project.
                </p>
                <div className="card-actions justify-center">
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    React
                  </div>
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    React Router
                  </div>
                  <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">
                    MirageJS
                  </div>
                  <Link
                    href="https://github.com/UlisesCodesForYou/Cutlery-Corner-"
                    target="_blank"
                  >
                    <button className="text-md badge-outline badge mt-6 rounded-sm border-emerald-800 bg-emerald-300 py-4 px-9 font-pageFont tracking-wide text-black duration-300 hover:scale-110 lg:text-black lg:hover:bg-emerald-500">
                      View my code
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card mt-6 w-96 bg-base-100 shadow-xl md:mt-6 lg:mt-0">
              <figure>
                <Image
                  src="/Thriftster-page.png"
                  width={200}
                  height={300}
                  alt="Thrift store"
                  className="-mb-1 transform rounded-lg"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mb-4 mt-4 text-xl text-gray-600">
                  Thriftster Mobile App
                </h2>
                <p className="mb-8 text-gray-600">
                  {" "}
                  This app was created after going to the thrift store and
                  finding a hidden treasure at a low price and wanted to share
                  the location. So, I decided to create this app to do so.
                </p>
                <div className="card-actions justify-center">
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
                  <Link
                    href="https://github.com/UlisesCodesForYou/thriftser-app"
                    target="_blank"
                  >
                    <button className="text-md badge-outline badge mt-6 rounded-sm border-emerald-800 bg-emerald-300 py-4 px-9 font-pageFont tracking-wide text-black duration-300 hover:scale-110 lg:text-black lg:hover:bg-emerald-500">
                      View my code
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card mt-6 w-96 bg-base-100 shadow-xl md:lg:mt-0">
              <figure>
                <Image
                  src="/GAAD-Grid.png"
                  width={500}
                  height={800}
                  alt="GAAD foundation"
                  className="-mb-1 transform rounded-lg"
                />
              </figure>
              <div className="card-body mt-12">
                <h2 className="card-title mb-4 mt-5  text-xl text-gray-600">
                  GAAD Foundation
                </h2>
                <p className="mb-3 text-gray-600">
                  {" "}
                  I&apos;m currently volunteering in the reconstruction of this
                  website. The GAAD Foundation’s vision is for accessibility to
                  be part of the product development lifecycle for technology
                  and digital products.
                </p>
                <div className="card-actions justify-center">
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
                    Mantine
                  </div>
                  <Link href="https://gaad.foundation/" target="_blank">
                    <button className="text-md badge-outline badge mt-6 rounded-sm border-emerald-800 bg-emerald-300 py-4 px-9 font-pageFont tracking-wide text-black duration-300 hover:scale-110 lg:text-black lg:hover:bg-emerald-500">
                      Old GAAD Foundation site
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
