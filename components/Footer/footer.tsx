import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
  return (
    <>
      {/*<footer className="bg-teal-600 text-center text-white">*/}
      {/*  <div className="p-4 text-center">*/}
      {/*    <Link*/}
      {/*      href="https://github.com/UlisesCodesForYou/portfoliopage"*/}
      {/*      target="_blank"*/}
      {/*    >*/}
      {/*      <button className="mb-5 rounded-full bg-white py-3 px-7 font-pageFont text-xs tracking-wide text-black duration-300 hover:scale-110 hover:bg-[#F05307] hover:text-white">*/}
      {/*        View this page&apos;s code on GitHub*/}
      {/*      </button>*/}
      {/*    </Link>*/}
      {/*    <Image*/}
      {/*      src="/Footer-Symbol.png"*/}
      {/*      alt="Chef Hat"*/}
      {/*      width={100}*/}
      {/*      height={100}*/}
      {/*      className="m-auto duration-500 hover:rotate-180"*/}
      {/*    />*/}
      {/*    <div className="mt-4 flex place-content-center space-x-5">*/}
      {/*      <Link href="https://github.com/UlisesCodesForYou" target="_blank">*/}
      {/*        <Image*/}
      {/*          src="/GitHub-Logo2.png"*/}
      {/*          alt="GitHub Logo"*/}
      {/*          width={50}*/}
      {/*          height={50}*/}
      {/*          className="duration-300 hover:scale-125"*/}
      {/*        />*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        href="https://www.linkedin.com/in/ulises-orozco-dev/"*/}
      {/*        target="_blank"*/}
      {/*      >*/}
      {/*        <Image*/}
      {/*          src="/Linked-In-Logo.png"*/}
      {/*          alt="Linkedin Logo"*/}
      {/*          width={60}*/}
      {/*          height={60}*/}
      {/*          className="duration-300 hover:scale-125"*/}
      {/*        />*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="container m-auto -mt-5 p-6">*/}
      {/*    <div className="text-center">*/}
      {/*      <p>*/}
      {/*        <span className="font-pageFont">*/}
      {/*          Designed & Built by Ulises Orozco.*/}
      {/*        </span>*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</footer>*/}

      {/*###### FOOTER 2 #######*/}
      <footer className="bg-[#014F86] text-center text-white">
        <div className="p-4 text-center">
          <Link
            href="https://github.com/UlisesCodesForYou/portfoliopage"
            target="_blank"
          >
            <button className="btn mb-5 rounded-full bg-white font-pageFont text-sm duration-300 hover:scale-110 hover:text-[#023020] lg:text-black lg:hover:bg-emerald-300">
              View this page&apos;s code on GitHub
            </button>
          </Link>
          <Image
            src="/Footer-Symbol2.png"
            alt="Chef Hat"
            width={112}
            height={112}
            className="m-auto duration-500 hover:rotate-180"
          />
          <div className="mt-4 flex place-content-center space-x-5">
            <Link href="https://github.com/UlisesCodesForYou" target="_blank">
              <Image
                src="/GitHub-Logo2.png"
                alt="GitHub Logo"
                width={50}
                height={50}
                className="bg-[#014F86] duration-300 hover:scale-125"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ulises-orozco-dev/"
              target="_blank"
            >
              <Image
                src="/Linked-In-Logo.png"
                alt="Linkedin Logo"
                width={60}
                height={60}
                className="duration-300 hover:scale-125"
              />
            </Link>
          </div>
        </div>

        <div className="container m-auto -mt-5 p-6">
          <div className="text-center">
            <p>
              <span className="font-pageFont text-sky-50">
                Designed & Built by Ulises Orozco.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
