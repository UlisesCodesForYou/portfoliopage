import Footer from "@components/footer";
import NavBar from "@components//navBar";
import ContactForm from "@components/contactForm";
import AboutMe from "@components/aboutMe";
import Hero from "@components/hero";
import MyProjects from "@components/myProjects";
import MyResume from "@components/myResume";

export const MainPage = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-gray-50">
      <div>
        <NavBar />
      </div>
      <Hero />
      <div id="aboutMe">
        <AboutMe />
      </div>
      <div id="myProjects">
        <MyProjects />
      </div>
      <div id="myResume">
        <MyResume />
      </div>
      <div id="sayHello">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};
