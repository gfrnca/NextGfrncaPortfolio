// CSS
import { Container } from "@/src/styles/global";
import { HomePageWrapper } from "./HomePage.styled";

// Components
import Hero from "../../organisms/HomePage/Hero/Hero";
import Academic from "../../organisms/HomePage/Academic/Academic";
import Skills from "../../organisms/Skills/Skills";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Container>
        <Hero />
        <Skills />
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#09090a"
          fillOpacity="1"
          d="M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,218.7C672,224,768,160,864,144C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <Container className="academic-container">
        <Academic />
      </Container>
    </HomePageWrapper>
  );
};

export default HomePage;
