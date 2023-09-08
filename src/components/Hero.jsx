import React from 'react';
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex:2;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 74px;
`

const About = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.img`
  height: 5px;
`

const Subtitle = styled.h2`
  color: #da4ea2;
  cursor: pointer;
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 3;
`
const Img = styled.img``


const Hero = () => {
    return (
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Title> Claudio's Portfolio </Title>
                    <About>
                        <Line src={"./img/line.png"}/>
                        <Subtitle>About me</Subtitle>
                    </About>
                    <Desc> College student with a passion for computer and the challenges of translating thoughts to code</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    {/* 3d model*/}
                    <Img src={"./img/moon.png"}/>
                </Right>
            </Container>
        </Section>
    )
}


export default Hero;
