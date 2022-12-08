import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-teal-600 text-center text-white">
      <div className="p-4 text-center">
        <Link
          href="https://github.com/UlisesCodesForYou/portfoliopage"
          target="_blank"
        >
          <button className="mb-4 rounded-full bg-white py-3 px-7 font-pageFont text-xs tracking-wide text-black duration-300 hover:scale-110 hover:bg-[#F05307] hover:text-white">
            View this page&apos;s code on GitHub
          </button>
        </Link>
        <Image
          src="/Footer-Symbol.png"
          alt="Chef Hat"
          width={100}
          height={100}
          className="m-auto"
        />
        <div className="mt-4 flex place-content-center space-x-5">
          <Link href="https://github.com/UlisesCodesForYou" target="_blank">
            <Image
              src="/GitHub-Logo2.png"
              alt="GitHub Logo"
              width={50}
              height={50}
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
              height={0}
            />
          </Link>
        </div>
      </div>

      <div className="container m-auto -mt-5 p-6">
        <div className="text-center">
          <p>
            <span className="font-pageFont">
              Designed & Built by Ulises Orozco.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
