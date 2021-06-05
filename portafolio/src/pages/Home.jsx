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
        <div id="formation">
          <FormationSection
            titleAbilities="Abilities"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem."
          />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
