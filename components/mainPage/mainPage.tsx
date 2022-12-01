import Footer from "../footer";
import NavBar from "../navBar";
import ContactForm from "../contactForm";
import AboutMe from "../aboutMe";
import Hero from "../hero";
import MyProjects from "../myProjects";
import MyResume from "../myResume";
//configure imports Saul's way

export const MainPage = () => {
  return (
    <>
      <div className="flex h-screen flex-col justify-between bg-gray-50">
        <section className="bg-gray-50"> </section>
        <NavBar />
        <Hero />
        <AboutMe />
        <MyProjects />
        <MyResume />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};
