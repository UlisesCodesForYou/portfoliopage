import Image from "next/image";
import Link from "next/link";

export const MyProjects = () => {
  return (
    <>
      <section
        className="sm:m -mb-20 bg-gradient-to-b from-teal-600"
        id="myProjects"
      >
        {/*component*/}
        <div className="py-10 px-10 text-center">
          <p>
            <span className="mb-3 text-4xl font-medium text-white">
              Projects:
            </span>{" "}
          </p>
          <p className="mt-2 font-pageFont text-teal-50 sm:text-sm md:text-lg">
            Below are a few of my projects along with the technologies I used to
            create them.
          </p>
        </div>
        <div className="-mt-24 bg-opacity-10 px-3 py-20 md:lg:xl:px-20 ">
          <div className="group grid grid-cols-1 shadow-xl md:lg:xl:grid-cols-3">
            <div className="group flex flex-col items-center bg-zinc-50 p-10 text-center ">
              <p className="mt-3 mb-7 font-pageFont text-3xl font-medium font-bold text-teal-600">
                Cutlery Corner
              </p>
              <Image
                src="/Cutlery-Corner.png"
                width={500}
                height={800}
                alt="cutlery store"
                className="mb-7 transform rounded-lg transition-all hover:scale-110"
              />
              <Image
                src="/React3.png"
                alt="React logo"
                width={90}
                height={90}
                className="mb-4"
              />
              <p className="text-md mt-2 font-pageFont text-teal-600">
                As a former chef, I thought it would be fun to finally create
                one. This is a static, cutlery website with functioning tabs.
              </p>
              <br />
              <Link
                href="https://github.com/UlisesCodesForYou/Cutlery-Corner-"
                target="_blank"
              >
                <button className="text-md rounded-full bg-teal-600 py-3 px-7 font-pageFont tracking-wide text-white duration-300 hover:scale-110 hover:bg-[#F05307] xl:mt-4">
                  View my code
                </button>
              </Link>
            </div>

            <div className="group flex flex-col items-center bg-zinc-50 p-10 text-center">
              <p className="mt-3 mb-7 font-pageFont text-3xl font-bold text-teal-600">
                Thriftster App
              </p>
              <Image
                src="/Thriftster-page.png"
                width={200}
                height={300}
                alt="Thrift store"
                className="mb-6 transform rounded-lg transition-all hover:scale-110"
              />
              <div className="mb-4 flex space-x-4">
                <Image
                  src="/NextJs-logo.png"
                  width={100}
                  height={100}
                  alt="next js logo"
                />
                <Image
                  src="/Typescript-logo.png"
                  alt="Typescript logo"
                  width={60}
                  height={30}
                />
                <Image
                  src="/Tailwind-logo.png"
                  alt="Tailwind logo"
                  width={60}
                  height={30}
                />
              </div>
              <p className="text-md mt-2 font-pageFont text-teal-600 ">
                This app was created after going to the thrift store and finding
                a hidden treasure at a low price. I also wanted to share the
                location of the store I found it in. So, I decided to create
                this app to do so.
              </p>
              <Link
                href="https://github.com/UlisesCodesForYou/thriftser-app"
                target="_blank"
              >
                <button className="text-md mt-4 rounded-full bg-teal-600 py-3 px-7 font-pageFont tracking-wide text-white duration-300 hover:scale-110 hover:bg-[#F05307] xl:mt-12">
                  View my code
                </button>
              </Link>
            </div>
            <div className="group flex flex-col items-center bg-zinc-50 p-10 text-center">
              <p className="mt-3 mb-5 font-pageFont text-3xl font-bold text-teal-600">
                GAAD Foundation
              </p>
              <Image
                src="/GAAD-Grid.png"
                width={600}
                height={500}
                alt="GAAD foundation"
                className="mb-6 transform rounded-lg transition-all hover:scale-110"
              />
              <Image
                src="/GAAD-Founding-Grid.png"
                width={600}
                height={500}
                alt="GAAD foundation"
                className="mb-6 transform rounded-lg transition-all hover:scale-110"
              />
              <div className="mb-4 flex space-x-4">
                <Image
                  src="/NextJs-logo.png"
                  width={100}
                  height={100}
                  alt="/"
                />
                <Image
                  src="/Typescript-logo.png"
                  alt="Typescript logo"
                  width={60}
                  height={40}
                />
                <Image
                  src="/Mantine-logo.png"
                  alt="Mantine logo"
                  width={60}
                  height={40}
                />
              </div>
              <p className="text-md mt-2 font-pageFont text-teal-600 ">
                I&apos;m currently volunteering in the reconstruction of this
                website. The GAAD Foundation’s vision is for accessibility to be
                part of the product development lifecycle for technology and
                digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*####### MY PROJECTS 2 #####*/}
      {/*<section className="sm:m -mb-20 bg-white" id="myProjects">*/}
      {/*  <div className="relative flex items-center py-5">*/}
      {/*    <div className="m-3 flex-grow border-t border-gray-400"></div>*/}
      {/*    <span className="mx-4 flex-shrink font-pageFont text-4xl text-gray-600">*/}
      {/*      My Projects*/}
      {/*    </span>*/}
      {/*    <div className="m-3 flex-grow border-t border-gray-400"></div>*/}
      {/*  </div>*/}
      {/*  /!*###### WORK SECTION 2 #######*!/*/}
      {/*  <div className="mt-2 bg-opacity-10 py-10 md:lg:xl:px-20">*/}
      {/*    <div className="group grid grow grid-cols-1 md:justify-items-center md:lg:xl:grid-cols-3">*/}
      {/*      <div className="card w-96 bg-base-100 shadow-xl">*/}
      {/*        <figure>*/}
      {/*          <Image*/}
      {/*              src="/Cutlery-Corner.png"*/}
      {/*              width={500}*/}
      {/*              height={800}*/}
      {/*              alt="cutlery store"*/}
      {/*              className="-mb-1 transform rounded-lg"*/}
      {/*          />*/}
      {/*        </figure>*/}
      {/*        <div className="card-body">*/}
      {/*          <h2 className="card-title mb-1 text-xl text-gray-600">*/}
      {/*            Cutlery Corner*/}
      {/*          </h2>*/}
      {/*          <p className="mb-3 text-gray-600">*/}
      {/*            {" "}*/}
      {/*            As a former chef, I thought it would be fun to finally create*/}
      {/*            one. This is a static, cutlery website with functioning tabs.*/}
      {/*            This is my first completed project.*/}
      {/*          </p>*/}
      {/*          <div className="card-actions justify-center">*/}
      {/*            <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">*/}
      {/*              React*/}
      {/*            </div>*/}
      {/*            <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">*/}
      {/*              React Router*/}
      {/*            </div>*/}
      {/*            <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">*/}
      {/*              MirageJS*/}
      {/*            </div>*/}
      {/*            <Link*/}
      {/*                href="https://github.com/UlisesCodesForYou/Cutlery-Corner-"*/}
      {/*                target="_blank"*/}
      {/*            >*/}
      {/*              <button className="text-md badge-outline badge rounded-sm border-emerald-800 bg-emerald-300 py-4 px-9 font-pageFont tracking-wide text-black duration-300 hover:scale-110 lg:text-black lg:hover:bg-emerald-500 xl:mt-4">*/}
      {/*                View my code*/}
      {/*              </button>*/}
      {/*            </Link>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="card mt-6 w-96 bg-base-100 shadow-xl md:mt-6 lg:mt-0">*/}
      {/*        <figure>*/}
      {/*          <Image*/}
      {/*              src="/Thriftster-page.png"*/}
      {/*              width={200}*/}
      {/*              height={300}*/}
      {/*              alt="Thrift store"*/}
      {/*              className="-mb-1 transform rounded-lg"*/}
      {/*          />*/}
      {/*        </figure>*/}
      {/*        <div className="card-body">*/}
      {/*          <h2 className="card-title mb-1 text-xl text-gray-600">*/}
      {/*            Thriftster Mobile App*/}
      {/*          </h2>*/}
      {/*          <p className="mb-3 text-gray-600">*/}
      {/*            {" "}*/}
      {/*            This app was created after going to the thrift store and*/}
      {/*            finding a hidden treasure at a low price. I also wanted to*/}
      {/*            share the location of the store I found it in. So, I decided*/}
      {/*            to create this app to do so.*/}
      {/*          </p>*/}
      {/*          <div className="card-actions justify-center">*/}
      {/*            <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">*/}
      {/*              React*/}
      {/*            </div>*/}
      {/*            <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">*/}
      {/*              NextJS*/}
      {/*            </div>*/}
      {/*            <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">*/}
      {/*              Typescript*/}
      {/*            </div>*/}
      {/*            <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">*/}
      {/*              Tailwind CSS*/}
      {/*            </div>*/}
      {/*            <Link*/}
      {/*                href="https://github.com/UlisesCodesForYou/thriftser-app"*/}
      {/*                target="_blank"*/}
      {/*            >*/}
      {/*              <button className="text-md badge-outline badge rounded-sm border-emerald-800 bg-emerald-300 py-4 px-9 font-pageFont tracking-wide text-black duration-300 hover:scale-110 lg:text-black lg:hover:bg-emerald-500 xl:mt-4">*/}
      {/*                View my code*/}
      {/*              </button>*/}
      {/*            </Link>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="card mt-6 w-96 bg-base-100 shadow-xl md:lg:mt-0">*/}
      {/*        <figure>*/}
      {/*          <Image*/}
      {/*              src="/GAAD-Grid.png"*/}
      {/*              width={500}*/}
      {/*              height={800}*/}
      {/*              alt="GAAD foundation"*/}
      {/*              className="-mb-1 transform rounded-lg"*/}
      {/*          />*/}
      {/*        </figure>*/}
      {/*        <div className="card-body mt-12">*/}
      {/*          <h2 className="card-title mb-1 text-xl text-gray-600">*/}
      {/*            GAAD Foundation*/}
      {/*          </h2>*/}
      {/*          <p className="mb-3 text-gray-600">*/}
      {/*            {" "}*/}
      {/*            I&apos;m currently volunteering in the reconstruction of this*/}
      {/*            website. The GAAD Foundation’s vision is for accessibility to*/}
      {/*            be part of the product development lifecycle for technology*/}
      {/*            and digital products.*/}
      {/*          </p>*/}
      {/*          <div className="card-actions justify-center">*/}
      {/*            <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">*/}
      {/*              React*/}
      {/*            </div>*/}
      {/*            <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">*/}
      {/*              NextJS*/}
      {/*            </div>*/}
      {/*            <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">*/}
      {/*              Typescript*/}
      {/*            </div>*/}
      {/*            <div className="badge-outline badge border-[#61A5C2] bg-[#A9D6E5] text-xs text-black">*/}
      {/*              Mantine*/}
      {/*            </div>*/}
      {/*            <Link href="https://gaad.foundation/" target="_blank">*/}
      {/*              <button className="text-md badge-outline badge rounded-sm border-emerald-800 bg-emerald-300 py-4 px-9 font-pageFont tracking-wide text-black duration-300 hover:scale-110 lg:text-black lg:hover:bg-emerald-500 xl:mt-4">*/}
      {/*                Old GAAD Foundation site*/}
      {/*              </button>*/}
      {/*            </Link>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
};
