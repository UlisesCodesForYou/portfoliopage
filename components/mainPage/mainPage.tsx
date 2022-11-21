import Image from "next/image";
import { useRef } from "react";
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
          <nav className="fixed top-0 left-0 z-50 w-full bg-teal-600 py-6 font-pageFont">
            <div className="container mx-auto flex justify-between">
              <Image
                src="/Chef-hat.png"
                width={50}
                height={50}
                alt="chef hat"
                className="animate-bounce"
              />
              <ul className="flex items-center gap-x-8 text-sm tracking-wide">
                <li className="py-1 text-white duration-300 hover:scale-125">
                  <a
                    className="hover:cursor-pointer"
                    onClick={() => scrollToSection(aboutMe)}
                  >
                    About me
                  </a>
                </li>
                <li className="py-1 text-white duration-300 hover:scale-125">
                  <a
                    className="hover:cursor-pointer"
                    onClick={() => scrollToSection(myProjects)}
                  >
                    My projects
                  </a>
                </li>
                <li className="py-1 text-white duration-300 hover:scale-125">
                  <a
                    className="hover:cursor-pointer"
                    onClick={() => scrollToSection(myResume)}
                  >
                    My resume
                  </a>
                </li>
                <button className="rounded-full bg-white py-3 px-7 text-xs tracking-wide duration-300 hover:scale-110 hover:bg-[#F05307] hover:text-white">
                  <a onClick={() => scrollToSection(contactMe)}>SAY HELLO</a>
                </button>
              </ul>
            </div>
          </nav>

          <div className="mt-18 container mx-auto mt-10 flex flex-col-reverse space-y-6 px-6 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16">
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
            <div className="flex h-96 w-full items-center justify-center lg:w-1/2">
              <Image
                className="mx-auto object-cover"
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

        <section className="bg-teal-600" ref={myProjects}>
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
                  src="/React-logo.png"
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
                  <button className="text-md rounded-full bg-teal-600 py-3 px-7 font-pageFont tracking-wide text-white duration-300 hover:scale-110 hover:bg-[#F05307]">
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
                  <button className="text-md mt-4 rounded-full bg-teal-600 py-3 px-7 font-pageFont tracking-wide text-white duration-300 hover:scale-110 hover:bg-[#F05307]">
                    View my code
                  </button>
                </Link>
              </div>
              <div className="group flex cursor-pointer flex-col items-center p-10 text-center hover:bg-slate-50">
                <p className="mt-3 mb-5 font-pageFont text-3xl font-bold text-teal-600">
                  GAAD Foundation
                </p>
                <Image
                  src="/GAAD-Foundation.png"
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

        <section className="bg-gradient-to-b from-teal-600" ref={contactMe}>
          <div className="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
            <h2 className="mb-4 text-center font-pageFont text-4xl font-extrabold tracking-tight text-white">
              Say Hello!
            </h2>
            <p className="mb-8 text-center font-pageFont font-light text-white sm:text-xl lg:mb-16">
              Got any more questions regarding my projects? Need advice on your
              cooking skills? Please feel free to ask.{" "}
            </p>
            <form
              action="#"
              className="space-y-8 "
              onSubmit={formSubmissionHandler}
            >
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
                  id="subject"
                  placeholder="I would like to see more of your projects/Is medium rare chicken safe to eat? (No it's not!)"
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
                  placeholder="Leave a comment..."
                  onChange={enteredTextChangedHandler}
                  onBlur={enteredTextBlurHandler}
                  value={enteredText}
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
                  className="sm: m-auto rounded-full bg-teal-600 py-3 px-7 font-bold tracking-wide text-white duration-300 hover:scale-110 hover:bg-[#F05307] focus:outline-none disabled:opacity-60"
                  disabled={!formIsValid}
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
