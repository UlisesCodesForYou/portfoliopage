import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div
        className="mt-18 container mx-auto mt-10 flex flex-col-reverse space-y-6 px-6 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16"
        id="home"
      >
        <div className="w-full lg:mt-20 lg:w-1/2">
          <div className="lg:max-w-lg ">
            <h1 className="sm:text md:text text-center text-center font-pageFont text-xl font-bold text-teal-600 lg:text-left lg:text-4xl">
              Hello there!
            </h1>
            <h2 className="sm:text md:text mt-5 text-center text-center font-pageFont text-xl font-bold text-teal-600 lg:text-left lg:text-3xl">
              I&apos;m Ulises Orozco
            </h2>

            <div className="mt-5 space-y-5 ">
              <p className="-mx-2 font-pageFont text-teal-600 sm:text-left md:text-left lg:text-left">
                I&apos;m a former Chef turned web developer. I design and build
                websites and apps. I believe that both the Culinary and Software
                development industries have the same root value; they both deal
                with providing great user/guest experiences.
              </p>
              <p className="md:text -mx-2 flex items-center text-center font-pageFont text-teal-600" />
            </div>
          </div>
        </div>
        <div className="flex h-96 w-full items-center justify-center lg:w-1/2 ">
          <Image
            className="mx-auto object-cover xl:mt-10 2xl:mt-10"
            src="/My-Logo.png"
            alt="chef hat"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/*#### HERO 2 ######*/}
      {/*<div className="isolate bg-white">*/}
      {/*  <main>*/}
      {/*    <div className="relative px-6 lg:px-8">*/}
      {/*      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">*/}
      {/*        <div className="sm:mt mt-16 md:mt-0 lg:mt-0">*/}
      {/*          <div>*/}
      {/*            <h1 className="text-4xl font-bold tracking-tight text-gray-600 sm:text-center sm:text-6xl">*/}
      {/*              Hello! My name is*/}
      {/*            </h1>*/}
      {/*            <h1 className="text-4xl font-bold tracking-tight text-gray-600 sm:text-center sm:text-6xl">*/}
      {/*              Ulises Orozco*/}
      {/*            </h1>*/}
      {/*            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">*/}
      {/*              I&apos;m a former Chef turned web developer. I design and*/}
      {/*              build websites and apps. I believe that both the Culinary*/}
      {/*              and Software Development industries have the same root*/}
      {/*              value; they both deal with providing great user/guest*/}
      {/*              experiences.*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">*/}
      {/*            <svg*/}
      {/*              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"*/}
      {/*              viewBox="0 0 1155 678"*/}
      {/*              fill="none"*/}
      {/*              xmlns="http://www.w3.org/2000/svg"*/}
      {/*            >*/}
      {/*              <path*/}
      {/*                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"*/}
      {/*                fillOpacity=".3"*/}
      {/*                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"*/}
      {/*              />*/}
      {/*              <defs>*/}
      {/*                <linearGradient*/}
      {/*                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"*/}
      {/*                  x1="1155.49"*/}
      {/*                  x2="-78.208"*/}
      {/*                  y1=".177"*/}
      {/*                  y2="474.645"*/}
      {/*                  gradientUnits="userSpaceOnUse"*/}
      {/*                >*/}
      {/*                  <stop stopColor="#014F86" />*/}
      {/*                  <stop offset={1} stopColor="#014F86" />*/}
      {/*                </linearGradient>*/}
      {/*              </defs>*/}
      {/*            </svg>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </main>*/}
      {/*</div>*/}
    </>
  );
};
