import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
  return (
    <>
      <footer className="bg-[#014F86] pt-16 pb-8 text-center text-white">
        <div className="text-center">
          <Link
            href="https://github.com/UlisesCodesForYou/portfoliopage"
            target="_blank"
          >
            <button className="btn mb-10 rounded-full bg-white font-pageFont text-sm text-black duration-300 hover:scale-110 hover:text-[#023020] lg:hover:bg-emerald-300">
              View this page&apos;s code on GitHub
            </button>
          </Link>
          <Image
            src="/Footer-Symbol2.png"
            alt="Chef Hat"
            width={112}
            height={112}
            className="m-auto pb-8 duration-500 hover:rotate-180"
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

        <div className="container m-auto pt-8">
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
