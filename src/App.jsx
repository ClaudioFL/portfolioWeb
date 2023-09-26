import React, { useEffect } from 'react';
import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Resume from "./components/Resume";
import SpaceBackground from './components/SpaceBackground'; // Import the new component
import "./global.css"

const Container = styled.div`
  height: 110vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("");
  &::-webkit-scrollbar{
    display: none;
  }
  margin: 0;
  padding: 0;
`;

const Flashlight = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  pointer-events: none;
  display: none;
  mix-blend-mode: screen;
  z-index: 1000; // ensure the flashlight effect is on top of other content
`;

function App() {

    useEffect(() => {
        const flashlight = document.getElementById('flashlight');

        function moveFlashlight(event) {
            flashlight.style.left = (event.clientX - 25) + 'px';
            flashlight.style.top = (event.clientY - 25) + 'px';
            flashlight.style.display = 'block';
        }

        document.addEventListener('mousemove', moveFlashlight);
        document.addEventListener('mouseleave', () => {
            flashlight.style.display = 'none';
        });

        // Cleanup to avoid memory leaks
        return () => {
            document.removeEventListener('mousemove', moveFlashlight);
        };
    }, []);

    return (
        <Container>
            <SpaceBackground />
            <Flashlight id="flashlight" />
            <Hero />
            <Who/>
            <Resume />
            <Works />
            <Contact />
        </Container>
    );
}

export default App;
