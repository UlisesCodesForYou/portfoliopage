import Footer from "@components/footer";
import NavBar from "@components//navBar";
import ContactForm from "@components/contactForm";
import AboutMe from "@components/aboutMe";
import Hero from "@components/hero";
import MyProjects from "@components/myProjects";
import MySkills from "@components/mySkills";

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
