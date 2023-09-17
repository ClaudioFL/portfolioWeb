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
        imageUrl: "/path/to/image2.jpg",
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
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    <-webkit-text-stroke>: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`
const Right = styled.div`
  flex:1;
`




const Works = () => {
    return (
        <div id="works">
        <Section>
            <Container>
                <Left>
                    {projectData.map((project) => (
                        <ProjectBox key={project.title}>
                            <img src={project.imageUrl} alt={project.title} />
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </ProjectBox>
                    ))}
                </Left>
                <Right>
                    {/* You can put any additional content or leave it empty */}
                </Right>
            </Container>
        </Section>
        </div>
    );
};


export default Works;

