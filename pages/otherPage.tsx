import Image from "next/image";
import NavBar from "@components/NavBar";
const Hero = () => {
  return (
    <>
      <NavBar />
      <div className=" hero min-h-screen bg-gray-50">
        <div className="hero-content flex-col flex-col-reverse lg:flex-row-reverse ">
          <div className="text-center lg:text-left">
            <h1 className=" mt-8 text-5xl font-bold text-[#0092A8]">
              Hi, I&apos;m Ulises
            </h1>
            <p className="py-6 text-2xl text-[#14adc6]">
              I&apos;m a former Chef turned web developer. I design and build
              websites and apps. I believe that both the Culinary and Software
              development industries have the same root value; they both deal
              with providing great user/guest experiences.
            </p>
          </div>
          <Image
            className="mx-auto object-cover xl:mt-10 2xl:mt-10"
            src="/Logo-2.png"
            alt="chef hat"
            width={600}
            height={600}
          />
        </div>
      </div>
    </>
  );
};

// bg-gradient-to-b from-[#14adc6] via-[#0092A8] to-[#1D5861]
export default Hero;
