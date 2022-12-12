import useInput from "../../hooks";
import React from "react";

const isNotEmpty = (value: string) => value.trim() !== "";
const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const ContactForm = () => {
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    isValid: enteredEmailIsValid,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(validateEmail);

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
    <section
      className="sm:m mt-48 bg-gradient-to-t from-teal-600 lg:mt-20"
      id="sayHello"
    >
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
              <p className="mt-2 animate-bounce text-xs italic text-red-800">
                If you are seeing this bounce it means that you did not enter a
                valid email. Please enter one.
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
              <p className="mt-2 text-xs italic text-red-800">
                If you consummed Medium rare chicken please go to the E.R! Also,
                please do not leave me blank. I get lonely.{" "}
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
              <p className="mt-2 text-xs italic text-red-800">
                Please leave me a message. I am so lonely!! Just kidding...or am
                I?
              </p>
            )}
          </div>
          <div className="container text-center">
            <button
              className="cursor-pointer rounded-full bg-white py-3 px-7 font-bold tracking-wide text-black duration-300 hover:scale-110 hover:bg-[#F05307] hover:text-white focus:outline-none disabled:opacity-60 sm:m-auto"
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
  );
};
