import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Resume from "./components/Resume";
import "./global.css"



const Container = styled.div`
  height: 110vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg1.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
  margin: 0;
  padding: 0;
`;

function App() {
    return (
        <Container>
            <Hero />
            <Who/>
            <Resume />
            <Works />
            <Contact />
        </Container>
    );
}

export default App;
