import Image from 'next/image'

export const MainPage = () => {
    return (
        <>

            <section className="bg-gray-50 dark:bg-gray-800">
                <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>

                        {/*Mobile menu button*/}
                        <div className="flex lg:hidden">
                            <button type="button"
                                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                                    aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd"
                                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/*Mobile Menu open: "block", Menu closed: "hidden"*/}
                    {/*<div className="flex flex-col mt-4 space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0">*/}
                    {/*    <a className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"*/}
                    {/*       href="#">Home</a>*/}
                    {/*    <a className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"*/}
                    {/*       href="#">Components</a>*/}
                    {/*    <a className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"*/}
                    {/*       href="#">Pricing</a>*/}
                    {/*    <a className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"*/}
                    {/*       href="#">Contact</a>*/}
                    {/*    <a className="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-blue-400 hover:text-blue-500"*/}
                    {/*       href="#">FAQ</a>*/}
                    {/*</div>*/}

                    {/*<a className="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto"*/}
                    {/*   href="#">*/}
                    {/*    Contact Us*/}
                    {/*</a>*/}
                </nav>

                <div className="container flex flex-col-reverse px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-xl sm:text text-center font-bold font-pageFont text-teal-600 dark:text-white lg:text-4xl">
                                Hi! I'm Ulises Orozco!
                            </h1>

                            <div className="mt-8 space-y-5 ">
                                <p className="flex items-center -mx-2 text-teal-600 md:text text-center font-pageFont dark:text-gray-200">
                                    I am a former Chef turned web developer. I enjoy creating creating apps and websites.  I believe that both the Culinary and Software development
                                    industries have the same root value; they both deal with providing a great user/guest experiences.
                                </p>

                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">

                                </p>

                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">

                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="/Portfolio-Logo.png" alt="" />
                    </div>
                </div>
            </section>


            {/*My work section*/}
            <section className="bg-gray-50 dark:bg-gray-800">
                {/*component*/}
                <div className="mr-6 ml-6 bg-teal-600 shadow-xl shadow-teal-200-200 py-10 px-20 text-center">
                    <p className=" text-teal-600 ">
                        <span className="text-4xl font-medium text-white">Technologies</span> <br/> <span className="text-lg text-white">Below are a few examples of the the techcnologies I have used along with the sites/apps I created using them.</span>
                    </p>
                </div>
                <div className=" px-3 md:lg:xl:px-20 border-t border-b py-20 bg-opacity-10">
                    <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-gray-50 shadow-xl shadow-neutral-100 border">
                        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                            <p className="text-3xl font-medium font-bold font-pageFont text-teal-600 mt-3 mb-2">
                                Cutlery Corner
                            </p>
                            <Image src="/Cutlery-Corner.png" width={500} height={700} alt="cutlery store" />
                            <p className="text-xl font-medium mt-3 font-bold font-pageFont text-teal-600 ">
                                REACT and REACT Router
                            </p>
                            <Image src="/React-img.png" alt="/" width={90} height={90}/>

                            <p className="mt-2 text-sm font-pageFont text-teal-600 ">
                                As a former chef, I thought it would be fun to finally create one. This is a static, cutlery website with functioning tabs.
                            </p>
                        </div>

                        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                            <p className="text-3xl font-bold font-pageFont text-teal-600 mt-3 mb-2">
                                Thriftster Mobile App
                            </p>
                            <Image src="/Thriftster-page.png" width={200} height={200} alt="cutlery store"></Image>

                            <div className="flex space-x-4">
                                <Image src="/NextJs.png" width={100} height={100} alt="/" />
                                <Image src="/Typescript.png" alt="/" width={60} height={30} />
                                <Image src="/Tailwind-logo.png" alt="/" width={60} height={30} />
                            </div>

                            <p className="mt-2 text-sm font-pageFont text-teal-600 ">
                                This app was created after going to the thrift store and finding a hidden treasure at a low price. I also wanted to share the location of the store I found it in.
                                So, I decided to create this app to do so.
                            </p>
                        </div>

                        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                            <p className="text-3xl font-bold font-pageFont text-teal-600 mt-3 mb-2">
                                GAAD Foundation
                            </p>
                            <Image src="/GAAD-Foundation.png" width={500} height={500} alt="cutlery store"></Image>
                            <div className="flex space-x-4">
                                <Image src="/NextJs.png" width={100} height={100} alt="/" />
                                <Image src="/Typescript.png" alt="/" width={60} height={40} />
                                <Image src="/Mantine-logo.png" alt="/" width={60} height={40} />
                            </div>
                            <p className="mt-2 text-sm font-pageFont text-teal-600 ">
                              I am currently volunteering in the reconstruction of this website.  GAAD foundtion was created he purpose of GAAD is to get everyone talking, thinking and learning about digital access and inclusion, and the more than One Billion people with disabilities/impairments.
                            </p>
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}