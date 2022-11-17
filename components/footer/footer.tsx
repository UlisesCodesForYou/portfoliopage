import Link from "next/link";

export const Footer = () => {
    return (
        <>
            <footer className="text-center text-white bg-[#A33500]">
                <div className="container p-6 m-auto">
                    <div className="text-center">
                        <p>
                            <span className="font-pageFont">Designed & Built by Ulises Orozco.</span>
                        </p>
                    </div>
                </div>
                <div className="text-center p-4 bg-[#A33500]">
                    <Link href="https://github.com/UlisesCodesForYou/portfoliopage" target="_blank">
                        <button className="bg-white text-black rounded-full font-pageFont tracking-wide py-3 px-7 text-xs hover:scale-110 duration-300 hover:bg-teal-600 hover:text-white">View this page's code on GitHub</button>
                    </Link>
                </div>
            </footer>
        </>
    )
};

