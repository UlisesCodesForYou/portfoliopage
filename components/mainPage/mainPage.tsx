import Image from 'next/image'

export const MainPage = () => {
    return (
        <>

            <section className="bg-gray-50 dark:bg-gray-800">
                <nav className="fixed top-0 left-0 w-full py-6 bg-teal-600">
                    <div className="container mx-auto flex justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                        <ul className="text-sm tracking-wide items-center flex gap-x-8">
                            <li className="hover:scale-125 duration-300 py-1 text-white">
                                <a className="hover:cursor-pointer">About me!</a>
                            </li>
                            <li className="hover:scale-125 duration-300 py-1 text-white">
                                <a className="hover:cursor-pointer">Technology Used</a>
                            </li>
                            <li className="hover:scale-125 duration-300 py-1 text-white">
                                <a className="hover:cursor-pointer">My resume</a>
                            </li>
                           <button className="bg-white rounded-full tracking-wide py-3 px-7 text-xs hover:scale-110 duration-300 hover:bg-teal-100">
                               CONTACT ME!
                           </button>
                        </ul>
                    </div>
                </nav>

                <div className="container flex flex-col-reverse mt-10 px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
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
                            <p className="text-3xl font-medium font-bold font-pageFont text-teal-600 mt-3 mb-7">
                                Cutlery Corner
                            </p>
                            <Image src="/Cutlery-Corner.png" width={500} height={700} alt="cutlery store" className="mb-7 transform transition-all hover:scale-125"/>
                            <Image src="/React-logo.png" alt="/" width={90} height={90} className="mb-4"/>
                            <p className="mt-2 text-sm font-pageFont text-teal-600">
                                As a former chef, I thought it would be fun to finally create one. This is a static, cutlery website with functioning tabs.
                            </p>
                        </div>

                        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                            <p className="text-3xl font-bold font-pageFont text-teal-600 mt-3 mb-7">
                                Thriftster App
                            </p>
                            <Image src="/Thriftster-page.png" width={200} height={100} alt="cutlery store" className="mb-6 transform transition-all hover:scale-125"/>
                            <div className="flex space-x-4 mb-4">
                                <Image src="/NextJs-logo.png" width={100} height={100} alt="/" />
                                <Image src="/Typescript-logo.png" alt="/" width={60} height={30} />
                                <Image src="/Tailwind-logo.png" alt="/" width={60} height={30} />
                            </div>
                            <p className="mt-2 text-sm font-pageFont text-teal-600 ">
                                This app was created after going to the thrift store and finding a hidden treasure at a low price. I also wanted to share the location of the store I found it in.
                                So, I decided to create this app to do so.
                            </p>
                        </div>

                        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                            <p className="text-3xl font-bold font-pageFont text-teal-600 mt-3 mb-5">
                                GAAD Foundation
                            </p>
                            <Image src="/GAAD-Foundation.png" width={500} height={500} alt="GAAD foundation" className="mb-6 transform transition-all hover:scale-125" />
                            <div className="flex space-x-4 mb-4">
                                <Image src="/NextJs-logo.png" width={100} height={100} alt="/" />
                                <Image src="/Typescript-logo.png" alt="/" width={60} height={40} />
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