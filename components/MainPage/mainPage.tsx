import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import ContactForm from "@components/ContactForm";
import AboutMe from "@components/AboutMe";
import Hero from "@components/Hero";
import MyProjects from "@components/MyProjects";
import MySkills from "@components/MySkills";

export const MainPage = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-gray-50">
      <NavBar />
      <Hero />
      <AboutMe />
      <MyProjects />
      <MySkills />
      <ContactForm />
      <Footer />
    </div>
  );
};
