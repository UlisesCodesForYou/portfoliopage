import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className="bg-teal-600 text-center text-white">
        <div className="p-4 text-center">
          <Link
            href="https://github.com/UlisesCodesForYou/portfoliopage"
            target="_blank"
          >
            <button className="rounded-full bg-white py-3 px-7 font-pageFont text-xs tracking-wide text-black duration-300 hover:scale-110 hover:bg-teal-600 hover:text-white">
              View this pages code on GitHub
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
    </>
  );
};
