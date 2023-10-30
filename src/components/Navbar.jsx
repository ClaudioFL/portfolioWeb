import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

/*
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;


const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #3efffa;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`; */

const Link = styled.a`
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;



const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <List>
                    </List>
                </Links>
                <Icons>
                </Icons>
            </Container>
        </Section>
    );
};


export default Navbar;
