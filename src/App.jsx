import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Component imports
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Resume from './components/Resume';
import SpaceBackground from './components/SpaceBackground';

// Styles
import './global.css';

// Styled Components
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 0;
  padding: 0;
`;


const SideNav = styled.div`
  position: fixed;
  top: 50%;
  right: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${props => props.active ? 'white' : 'gray'};
  margin: 5px;
  border-radius: 50%;
  cursor: pointer;
`;


// Functional Components
const SideNavigation = ({ currentSection, setCurrentSection }) => (
    <SideNav>
        {[...Array(5)].map((_, index) => (
            <Dot
                key={index}
                active={currentSection === index}
                onClick={() => setCurrentSection(index)}
            />
        ))}
    </SideNav>
);


function App() {
    const containerRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    // Scroll lock mechanism
    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();

            if (isScrolling) return;

            setIsScrolling(true);

            if (e.deltaY > 0 && currentSection < 4) { // Scroll down
                setCurrentSection(prevSection => prevSection + 1);
            } else if (e.deltaY < 0 && currentSection > 0) { // Scroll up
                setCurrentSection(prevSection => prevSection - 1);
            }
        }

        const container = containerRef.current;
        container.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleScroll);
        };
    }, [isScrolling, currentSection]);

    useEffect(() => {
        containerRef.current.scrollTo({
            top: currentSection * window.innerHeight,
            behavior: "smooth"
        });

        const timer = setTimeout(() => setIsScrolling(false), 1000);
        return () => clearTimeout(timer);
    }, [currentSection]);

    return (
        <Container ref={containerRef}>
            <SpaceBackground />
            <Hero currentSection={currentSection} />
            <Who />
            <Resume />
            <Works />
            <Contact />
            <SideNavigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
        </Container>
    );
}

export default App;
