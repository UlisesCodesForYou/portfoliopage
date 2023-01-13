import Image from "next/image";
import NavBar from "@components/NavBar";
import Hero from "@components/Hero";

const AboutMe = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <section className="bg-white" id="aboutMe">
        <div className="relative flex items-center py-5">
          <div className="m-8 flex-grow border-t border-gray-400"></div>
          <span className="mx-4 flex-shrink font-pageFont text-4xl text-gray-600">
            About Me
          </span>
          <div className="m-8 flex-grow border-t border-gray-400"></div>
        </div>
        <div className="container mx-auto -mt-2 flex flex-col-reverse space-y-6 px-6 py-10 lg:h-[32rem] lg:flex-row lg:items-center  lg:py-16 ">
          <div className="w-full lg:w-1/2">
            <div className="sm::text text-center md:text-center lg:max-w-lg lg:text-left">
              <div className="mt-8 space-y-5">
                <p className="md:text text-md -mx-2 flex items-center font-pageFont text-[#343A40]">
                  My journey to become a web developer started back in 2017.
                  While working full-time in the restaurant industry, I was
                  became aware of the similarities between coding and cooking.
                  As time progressed, and when time allowed, I came to
                  appreciate the correlation between both; the goal of providing
                  a great user/guest experience. As time went on, I began to see
                  each language and its properties as ingredients; allowing me
                  more creative freedom.
                </p>
                <p className="md:text text-md -mx-2 flex items-center font-pageFont text-[#343A40]">
                  Fast-forward to today, and I have completed a few websites and
                  apps. I&apos;m currently a volunteer for the GAAD (Global
                  Awareness Accessibility Day) Foundation in their site
                  reconstruction.
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-96 w-full items-center justify-center lg:w-1/2">
            <Image
              className="mx-auto h-full w-full rounded-lg object-cover shadow-2xl lg:max-w-2xl"
              src="/My-photo.jpeg"
              alt="bald guy with glasses"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
