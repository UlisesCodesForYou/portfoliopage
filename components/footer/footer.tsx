import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-teal-600 text-center text-white">
      <div className="p-4 text-center">
        <Image
          src="/Footer-Symbol.png"
          alt="Chef Hat"
          width={100}
          height={100}
          className="m-auto"
        />
        <br />
        <Link
          href="https://github.com/UlisesCodesForYou/portfoliopage"
          target="_blank"
        >
          <button className="rounded-full bg-white py-3 px-7 font-pageFont text-xs tracking-wide text-black duration-300 hover:scale-110 hover:bg-[#F05307] hover:text-white">
            View this page&apos;s code on GitHub
          </button>
        </Link>
      </div>

      <div className="container m-auto p-6">
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
