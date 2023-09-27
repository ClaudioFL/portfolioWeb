import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Resume from "./components/Resume";
import SpaceBackground from './components/SpaceBackground';
import "./global.css"

const Container = styled.div`
  height: 100vh;  // Changed from 110vh to 100vh
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
  z-index: 1000;
`;

function App() {
    const flashlightRef = useRef(null);

    useEffect(() => {
        function moveFlashlight(event) {
            if(flashlightRef.current) {
                flashlightRef.current.style.left = (event.clientX - 25) + 'px';
                flashlightRef.current.style.top = (event.clientY - 25) + 'px';
                flashlightRef.current.style.display = 'block';
            }
        }

        function hideFlashlight() {
            if(flashlightRef.current) {
                flashlightRef.current.style.display = 'none';
            }
        }

        document.addEventListener('mousemove', moveFlashlight);
        document.addEventListener('mouseleave', hideFlashlight);

        return () => {
            document.removeEventListener('mousemove', moveFlashlight);
            document.removeEventListener('mouseleave', hideFlashlight);
        };
    }, []);

    return (
        <Container>
            <SpaceBackground />
            <Flashlight ref={flashlightRef} id="flashlight" />
            <Hero />
            <Who/>
            <Resume />
            <Works />
            <Contact />
        </Container>
    );
}

export default App;
