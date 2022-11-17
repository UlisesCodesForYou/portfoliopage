import Image from 'next/image'
import {useRef} from 'react';
import Link from 'next/link'

export const MainPage = () => {
    const aboutMe = useRef<HTMLDivElement>(null)
    const myProjects = useRef<HTMLDivElement>(null)
    const myResume = useRef<HTMLDivElement>(null)
    const contactMe = useRef<HTMLDivElement>(null)

    const scrollToSection = (elementRef: any) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <>
           <div className="bg-gray-50">
               <section className="bg-gray-50 dark:bg-gray-50">
                   <nav className="fixed top-0 left-0 w-full py-6 bg-teal-600 z-50 font-pageFont">
                       <div className="container mx-auto flex justify-between">
                           <Image src="/Chef-hat2.png" width={50} height={50} alt="chef hat" className= "animate-bounce"/>
                           <ul className="text-sm tracking-wide items-center flex gap-x-8">
                               <li className="hover:scale-125 duration-300 py-1 text-white">
                                   <a className="hover:cursor-pointer" onClick={() => scrollToSection(aboutMe)}>About me</a>
                               </li>
                               <li className="hover:scale-125 duration-300 py-1 text-white">
                                   <a className="hover:cursor-pointer" onClick={() => scrollToSection(myProjects)}>My projects</a>
                               </li>
                               <li className="hover:scale-125 duration-300 py-1 text-white">
                                   <a className="hover:cursor-pointer"  onClick={() => scrollToSection(myResume)}>My resume</a>
                               </li>
                               <button className="bg-white rounded-full tracking-wide py-3 px-7 text-xs hover:scale-110 duration-300 hover:bg-[#F05307] hover:text-white">
                                   <a  onClick={() => scrollToSection(contactMe)}>SAY HELLO</a>
                               </button>
                           </ul>
                       </div>
                   </nav>

                   <div className="container flex flex-col-reverse mt-10 px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                       <div className="w-full lg:w-1/2">
                           <div className="lg:max-w-lg">
                               <h1 className="text-xl sm:text text-center font-bold font-pageFont text-teal-600 dark:text-white lg:text-4xl">
                                   {/* eslint-disable-next-line react/no-unescaped-entities */}
                                   Hi, I'm Ulises Orozco.
                               </h1>

                               <div className="mt-8 space-y-5 ">
                                   <p className="flex items-center -mx-2 text-teal-600 md:text text-center font-pageFont dark:text-gray-200">
                                       I am a former Chef turned web developer. I design and build websites and apps. I believe that both the Culinary and Software development
                                       industries have the same root value; they both deal with providing great user/guest experiences.
                                   </p>
                                   <p className="flex items-center -mx-2 text-teal-600 md:text text-center font-pageFont dark:text-gray-200" />
                               </div>
                           </div>
                       </div>
                       <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                           <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="/Portfolio-Logo.png" alt="" />
                       </div>
                   </div>
               </section>


               {/*About me section */}
               {/*<ScrollTotTop />*/}
               <section className="bg-gray-50 dark:bg-gray-800" ref={aboutMe}>
                   <div className="container flex flex-col-reverse mt-10 px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                       <div className="w-full lg:w-1/2">
                           <div className="lg:max-w-lg sm::text text-center md:text-center lg:text-left">
                               <div className="mt-8 space-y-5 ">
                                   <h1 className="text-4xl font-medium font-pageFont text-teal-600">About me:</h1>
                                   <p className="flex items-center -mx-2 text-teal-600 md:text font-pageFont dark:text-gray-200">
                                       Hello once again!  My name is Ulises Orozco and I enjoy creating websites and apps.  My journey to become a web developer started back in 2017.
                                       Working in the restaurant industry took up most of my day, but I still managed to learn coding on my free time. As time progressed, I realized that I enjoyed coding even more than cooking.
                                   </p>
                                   <p className="flex items-center -mx-2 text-teal-600 md:text font-pageFont dark:text-gray-200">
                                       Fast forward to today and I have been able to complete a few sites and apps. I have also been a volunteer for the GAAD (Global Awareness Accessibility Day) Foundation in their site reconstruction.
                                   </p>

                               </div>
                           </div>
                       </div>
                       <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                           <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="/My-photo.jpeg" alt=""/>
                       </div>
                   </div>
               </section>

               {/*My work section*/}

               <section className="bg-gray-50 dark:bg-gray-800" ref={myProjects}>
                   {/*component*/}
                   <div className="mr-6 ml-6 bg-teal-600 shadow-xl shadow-teal-200 py-10 px-20 text-center">
                       <p className=" text-teal-600 ">
                           <span className="text-4xl font-medium text-white">Projects</span> <br/>
                           <span className="text-lg text-white">Below are a few of my projects along with the technologies I used to create them.</span>
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
                               <br/>
                               <Link href="https://github.com/UlisesCodesForYou/Cutlery-Corner-" target="_blank">
                                   <button  className="bg-teal-600 text-white rounded-full tracking-wide py-3 px-7 font-pageFont text-md hover:scale-110 duration-300 hover:bg-[#F05307]">
                                       View my code
                                   </button>
                               </Link>
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
                               <Link href="https://github.com/UlisesCodesForYou/thriftser-app" target="_blank">
                                   <button className="bg-teal-600 text-white rounded-full tracking-wide py-3 px-7 font-pageFont text-md hover:scale-110 duration-300 hover:bg-[#F05307] mt-4">
                                       View my code
                                   </button>
                               </Link>
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
                               {/*<Link href="https://github.com/GAAD-Foundation/gaad-foundation-nextjs/pull/5" target="_blank">*/}
                               {/*    <button className="bg-teal-600 text-white rounded-full tracking-wide py-3 px-7 font-pageFont text-md hover:scale-110 duration-300 hover:bg-[#F05307] mt-4">*/}
                               {/*        View the code*/}
                               {/*    </button>*/}
                               {/*</Link>*/}
                           </div>
                       </div>
                   </div>
               </section>

               {/*CONTACT ME SECTION*/}

               <section className="bg-gray-50 dark:bg-gray-900" ref={contactMe}>
                   <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                       <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center font-pageFont text-teal-600">Say Hello!</h2>
                       <p className="mb-8 lg:mb-16 font-light text-center font-pageFont text-teal-600 sm:text-xl">Got any more questions regarding my projects? Need advice on your cooking skills? Please feel free to ask. </p>
                       <form action="#" className="space-y-8">
                           <div>
                               <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                   Your email
                               </label>
                               <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                      placeholder="name@something.com" required />
                           </div>
                           <div>
                               <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                               <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="I would like to see more of your projects/Is medium rare chicken safe to eat? (No it's not!)" required />
                           </div>
                           <div className="sm:col-span-2">
                               <label htmlFor="message"
                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                                   message</label>
                               <textarea id="message"
                                         className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                         placeholder="Leave a comment..."></textarea>
                           </div>
                           <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                               View my code
                           </button>
                       </form>
                   </div>
               </section>
           </div>
        </>
    )
}