import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div
        className="mt-18 container mx-auto mt-10 flex flex-col-reverse space-y-6 px-6 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16"
        id="home"
      >
        <div className="w-full lg:w-1/2 ">
          <div className="lg:max-w-lg ">
            <h1 className="sm:text md:text text-center text-center font-pageFont text-xl font-bold text-teal-600 lg:text-left lg:text-4xl">
              Hi, I&apos;m Ulises Orozco.
            </h1>

            <div className="mt-8 space-y-5 ">
              <p className="sm:text -mx-2 text-center font-pageFont text-teal-600 md:text-left lg:text-left">
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
            src="/Portfolio-Logo.png"
            alt="chef hat"
            width={600}
            height={600}
          />
        </div>
      </div>
    </>
  );
};
