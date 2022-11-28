import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import Footer from "../footer";
import useInput from "../../hooks";
//configure imports Saul's way

const isNotEmpty = (value: string) => value.trim() !== "";
const isEmail = (value: string) => value.includes("@");

export const MainPage = () => {
  const aboutMe = useRef<HTMLDivElement>(null);
  const myProjects = useRef<HTMLDivElement>(null);
  const myResume = useRef<HTMLDivElement>(null);
  const contactMe = useRef<HTMLDivElement>(null);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    isValid: enteredEmailIsValid,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: enteredSubject,
    hasError: enteredSubjectInputHasError,
    valueChangeHandler: enteredSubjectChangedHandler,
    isValid: enteredSubjectIsValid,
    inputBlurHandler: enteredSubjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredText,
    hasError: enteredTextInputHasError,
    valueChangeHandler: enteredTextChangedHandler,
    isValid: enteredTextIsValid,
    inputBlurHandler: enteredTextBlurHandler,
    reset: resetEnteredInput,
  } = useInput(isNotEmpty);

  let formIsValid: boolean;
  formIsValid = false;
  if (enteredTextIsValid && enteredEmailIsValid && enteredSubjectIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!enteredTextIsValid && !enteredEmailIsValid && !enteredSubjectIsValid) {
      return;
    }
    resetEmailInput();
    resetEnteredInput();
    resetSubjectInput();
  };

  return (
    <>
      <div className="flex h-screen flex-col justify-between bg-gray-50">
        <section className="bg-gray-50">
          {/*##### NAV BAR ######*/}
          <nav className="fixed top-0 left-0 z-50 mb-3 flex w-full flex-wrap items-center justify-between bg-teal-600 py-3 py-3 px-2 font-pageFont">
            <div className="container mx-auto flex flex-wrap justify-between px-4">
              <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
                <Image
                  src="/Chef-hat.png"
                  width={70}
                  height={70}
                  alt="chef hat"
                  className="sm:m ml-5 animate-bounce"
                />
                <button
                  className="text-color-black block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "flex-grow place-content-center lg:flex" +
                  (navbarOpen ? " flex" : " hidden")
                }
                id="example-navbar-danger"
              >
                <ul className="flex list-none flex-col items-center gap-x-8 p-4 tracking-wide md:flex-row md:space-x-8 md:border-0 md:bg-teal-600 md:text-lg lg:ml-auto lg:flex-row lg:text-lg">
                  <li className="py-4 text-white duration-300 hover:scale-125">
                    <a
                      className="block rounded hover:cursor-pointer"
                      onClick={() => scrollToSection(aboutMe)}
                    >
                      About Me
                    </a>
                  </li>
                  <li className="py-4 text-white duration-300 hover:scale-125">
                    <a
                      className="hover:cursor-pointer"
                      onClick={() => scrollToSection(myProjects)}
                    >
                      My Projects
                    </a>
                  </li>
                  <li className="py-4 text-white duration-300 hover:scale-125">
                    <a
                      className="block rounded hover:cursor-pointer"
                      onClick={() => scrollToSection(myResume)}
                    >
                      My Resume
                    </a>
                  </li>
                  <button className="rounded-full py-4 px-7 text-sm tracking-wide text-white duration-300 hover:scale-110 hover:text-white sm:bg-teal-600 md:text-white lg:bg-white lg:text-black lg:hover:bg-[#F05307]">
                    <a onClick={() => scrollToSection(contactMe)}>SAY HELLO</a>
                  </button>
                </ul>
              </div>
            </div>
          </nav>
          {/*####### END OF NAV BAR ######*/}

          <div className="mt-18 container mx-auto mt-10 flex flex-col-reverse space-y-6 px-6 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16 ">
            <div className="w-full lg:w-1/2 ">
              <div className="lg:max-w-lg ">
                <h1 className="sm:text md:text text-center text-center font-pageFont text-xl font-bold text-teal-600 lg:text-left lg:text-4xl">
                  Hi, I am Ulises Orozco.
                </h1>

                <div className="mt-8 space-y-5 ">
                  <p className="sm:text -mx-2 text-center font-pageFont text-teal-600 md:text-left lg:text-left">
                    I am a former Chef turned web developer. I design and build
                    websites and apps. I believe that both the Culinary and
                    Software development industries have the same root value;
                    they both deal with providing great user/guest experiences.
                  </p>
                  <p className="md:text -mx-2 flex items-center text-center font-pageFont text-teal-600" />
                </div>
              </div>
            </div>
            <div className="flex h-96 w-full items-center justify-center lg:w-1/2 ">
              <Image
                className="mx-auto object-cover xl:mt-10 2xl:mt-10"
                src="/Portfolio-Logo.png"
                alt="chef hat"
                width={600}
                height={600}
              />
            </div>
          </div>
        </section>

        {/*About me section */}
        {/*<ScrollTotTop />*/}
        <section className="bg-gradient-to-t from-teal-600" ref={aboutMe}>
          <div className="container mx-auto mt-10 flex flex-col-reverse space-y-6 px-6 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16">
            <div className="w-full lg:w-1/2">
              <div className="sm::text text-center md:text-center lg:max-w-lg lg:text-left">
                <div className="mt-8 space-y-5 ">
                  <h1 className="sm:text md:text text-center text-center font-pageFont text-xl font-bold text-white lg:text-left lg:text-4xl">
                    About me:
                  </h1>
                  <p className="md:text -mx-2 flex items-center font-pageFont text-white">
                    Hello once again! My name is Ulises Orozco and I enjoy
                    creating websites and apps. My journey to become a web
                    developer started back in 2017. Working in the restaurant
                    industry took up most of my day, but I still managed to
                    learn coding on my free time. As time progressed, I realized
                    that I enjoyed coding even more than cooking.
                  </p>
                  <p className="md:text -mx-2 flex items-center font-pageFont text-white">
                    Fast forward to today and I have been able to complete a few
                    sites and apps. I have also been a volunteer for the GAAD
                    (Global Awareness Accessibility Day) Foundation in their
                    site reconstruction.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-96 w-full items-center justify-center lg:w-1/2">
              <Image
                className="mx-auto h-full w-full rounded-md object-cover lg:max-w-2xl"
                src="/My-photo.jpeg"
                alt="bald guy with glasses"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        {/*My work section*/}

        <section className="bg-gradient-to-b from-teal-600" ref={myProjects}>
          {/*component*/}
          <div className="mr-6 ml-6 py-10 px-20 text-center">
            <p className=" text-teal-600 ">
              <span className="mb-3 text-4xl font-medium text-white">
                Projects:
              </span>{" "}
              <br />
              <span className="text-lg text-teal-600 text-white">
                Below are a few of my projects along with the technologies I
                used to create them.
              </span>
            </p>
          </div>
          <div className="-mt-24 bg-opacity-10 px-3 py-20 md:lg:xl:px-20">
            <div className="group grid grid-cols-1 bg-gray-50 md:lg:xl:grid-cols-3">
              <div className="group flex cursor-pointer flex-col items-center p-10 text-center hover:bg-slate-50 ">
                <p className="mt-3 mb-7 font-pageFont text-3xl font-medium font-bold text-teal-600">
                  Cutlery Corner
                </p>
                <Image
                  src="/Cutlery-Corner.png"
                  width={500}
                  height={700}
                  alt="cutlery store"
                  className="mb-7 transform transition-all hover:scale-110"
                />
                <Image
                  src="/React3.png"
                  alt="React logo"
                  width={90}
                  height={90}
                  className="mb-4"
                />
                <p className="mt-2 font-pageFont text-sm text-teal-600">
                  As a former chef, I thought it would be fun to finally create
                  one. This is a static, cutlery website with functioning tabs.
                </p>
                <br />
                <Link
                  href="https://github.com/UlisesCodesForYou/Cutlery-Corner-"
                  target="_blank"
                >
                  <button className="text-md rounded-full bg-teal-600 py-3 px-7 font-pageFont tracking-wide text-white duration-300 hover:scale-110 hover:bg-[#F05307] xl:mt-4">
                    View my code
                  </button>
                </Link>
              </div>

              <div className="group flex cursor-pointer flex-col items-center p-10 text-center hover:bg-slate-50">
                <p className="mt-3 mb-7 font-pageFont text-3xl font-bold text-teal-600">
                  Thriftster App
                </p>
                <Image
                  src="/Thriftster-page.png"
                  width={200}
                  height={100}
                  alt="cutlery store"
                  className="mb-6 transform transition-all hover:scale-110"
                />
                <div className="mb-4 flex space-x-4">
                  <Image
                    src="/NextJs-logo.png"
                    width={100}
                    height={100}
                    alt="next js logo"
                  />
                  <Image
                    src="/Typescript-logo.png"
                    alt="Typescript logo"
                    width={60}
                    height={30}
                  />
                  <Image
                    src="/Tailwind-logo.png"
                    alt="Tailwind logo"
                    width={60}
                    height={30}
                  />
                </div>
                <p className="mt-2 font-pageFont text-sm text-teal-600 ">
                  This app was created after going to the thrift store and
                  finding a hidden treasure at a low price. I also wanted to
                  share the location of the store I found it in. So, I decided
                  to create this app to do so.
                </p>
                <Link
                  href="https://github.com/UlisesCodesForYou/thriftser-app"
                  target="_blank"
                >
                  <button className="text-md mt-4 rounded-full bg-teal-600 py-3 px-7 font-pageFont tracking-wide text-white duration-300 hover:scale-110 hover:bg-[#F05307] xl:mt-12">
                    View my code
                  </button>
                </Link>
              </div>
              <div className="group flex cursor-pointer flex-col items-center p-10 text-center hover:bg-slate-50">
                <p className="mt-3 mb-5 font-pageFont text-3xl font-bold text-teal-600">
                  GAAD Foundation
                </p>
                <Image
                  src="/GAAD-Grid.png"
                  width={500}
                  height={500}
                  alt="GAAD foundation"
                  className="mb-6 transform transition-all hover:scale-110"
                />
                <div className="mb-4 flex space-x-4">
                  <Image
                    src="/NextJs-logo.png"
                    width={100}
                    height={100}
                    alt="/"
                  />
                  <Image
                    src="/Typescript-logo.png"
                    alt="Typescript logo"
                    width={60}
                    height={40}
                  />
                  <Image
                    src="/Mantine-logo.png"
                    alt="Mantine logo"
                    width={60}
                    height={40}
                  />
                </div>
                <p className="mt-2 font-pageFont text-sm text-teal-600 ">
                  I am currently volunteering in the reconstruction of this
                  website. GAAD foundtion was created he purpose of GAAD is to
                  get everyone talking, thinking and learning about digital
                  access and inclusion, and the more than One Billion people
                  with disabilities/impairments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*CONTACT ME SECTION*/}

        <section className="bg-gradient-to-t from-teal-600" ref={contactMe}>
          <div className="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
            <h2 className="mb-4 text-center font-pageFont text-4xl font-extrabold tracking-tight text-teal-600">
              Say Hello!
            </h2>
            <p className="mb-8 text-center font-pageFont font-light text-teal-600 sm:text-xl lg:mb-16">
              Got any more questions regarding my projects? Need advice on your
              cooking skills? Please feel free to ask.{" "}
            </p>
            <form
              name="contact  v1"
              method="post"
              data-netlify="true"
              className="space-y-8"
              data-netlify-honeypot="bot-field"
            >
              <div hidden>
                <input name="bot-field" />
              </div>
              <input type="hidden" name="form-name" value="contact v1" />

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@something.com"
                  onChange={emailChangedHandler}
                  onBlur={emailBlurHandler}
                  value={enteredEmail}
                  required
                />
                {emailInputHasError && (
                  <p className="mt-2 animate-bounce text-xs italic text-red-500">
                    If you are seeing this bounce it means that you did not
                    enter a valid email. Please enter one.
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Is medium rare chicken safe to eat? (No it's not!)"
                  onChange={enteredSubjectChangedHandler}
                  onBlur={enteredSubjectBlurHandler}
                  value={enteredSubject}
                  required
                />
                {enteredSubjectInputHasError && (
                  <p className="mt-2 text-xs italic text-red-500">
                    If you consummed Medium rare chicken please go to the E.R!
                    Also, please do not leave me blank. I get lonely.{" "}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
                  id="message"
                  name="message"
                  placeholder="Leave a comment..."
                  onChange={enteredTextChangedHandler}
                  onBlur={enteredTextBlurHandler}
                  value={enteredText}
                  required
                ></textarea>
                {enteredTextInputHasError && (
                  <p className="mt-2 text-xs italic text-red-500">
                    Please leave me a message. I am so lonely!! Just
                    kidding...or am I?
                  </p>
                )}
              </div>
              <div className="container text-center">
                <button
                  className="rounded-full bg-white py-3 px-7 font-bold tracking-wide text-black duration-300 hover:scale-110 hover:bg-[#F05307] hover:text-white focus:outline-none disabled:opacity-60 sm:m-auto"
                  disabled={!formIsValid}
                  onSubmit={formSubmissionHandler}
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
