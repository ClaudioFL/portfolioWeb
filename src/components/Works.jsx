import React, { useState } from "react";
import styled from "styled-components";

const projectData = [
    {
        title: "Project 1",
        imageUrl: "./img/moon.png",
        link: "https://link-to-project1.com"
    },
    {
        title: "Project 2",
        imageUrl: "./img/moon.png",
        link: "https://link-to-project2.com"
    },
    {
        title: "Project 3",
        imageUrl: "./img/moon.png",
        link: "https://link-to-project2.com"
    },
    {
        title: "Project 4",
        imageUrl: "./img/moon.png",
        link: "https://link-to-project2.com"
    },
    // ... add other projects similarly
];

const ProjectBox = styled.div`
    width: 300px;
    height: 400px;
    overflow: hidden;
    position: relative;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    a {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        text-decoration: none;
        transition: background-color 0.3s;

        &:hover {
            background-color: rgba(0, 0, 0, 0.9);
        }
    }
`;


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center; // Added this to vertically center the content
`

const Container = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: center; // Changed from space-between to center
  flex-wrap: wrap; // Allows wrapping of ProjectBox items if they don't fit in one line
  gap: 20px; // Provides spacing between ProjectBox items
`

const Works = () => {
    return (
        <div id="works">
            <Section>
                <Container>
                    {projectData.map((project) => (
                        <ProjectBox key={project.title}>
                            <img src={project.imageUrl} alt={project.title} />
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </ProjectBox>
                    ))}
                </Container>
            </Section>
        </div>
    );
};

export default Works;
