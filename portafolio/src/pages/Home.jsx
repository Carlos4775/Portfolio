import ExperienceSection from "../components/ExperienceSection";
import FormationSection from "../components/FormationSection";
import MainSection from "../components/MainSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <MainSection />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="formation">
          <FormationSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
