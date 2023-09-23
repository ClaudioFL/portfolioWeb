import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ResumeTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`;

const ResumeBox = styled.div`
  width: 70vw;
  height: 70vh;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Resume = () => {
    const googleDocsLink = "https://docs.google.com/document/d/DOC_ID_HERE/pub";  // Replace DOC_ID_HERE with your document's ID

    return (
        <div id="resume">
            <Section>
                <Container>
                    <ResumeTitle>My Resume</ResumeTitle>
                    <ResumeBox onClick={() => window.open(googleDocsLink, "_blank")}>
                        <img src="/img/r.jpg" alt="Resume Preview" />
                    </ResumeBox>
                </Container>
            </Section>
        </div>
    );
};

export default Resume;
