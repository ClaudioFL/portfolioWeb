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
  width: 1400px;  // revert the width back to 1400px
  display: flex;
  justify-content: space-between;  // push the children components to the opposite ends
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
  // remove the flex-grow property
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  margin: 0;  // reset margin
  padding: 0;  // reset padding
  list-style-position: initial;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  margin: 0;  // reset margin
  padding: 0;  // reset padding
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

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
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit; // or any other color you want
  cursor: pointer;

  &:hover {
    text-decoration: underline; // or any other hover effect you like
  }
`;



const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <List>
                        <ListItem><Link href="#home">Home</Link></ListItem>
                        <ListItem><Link href="#studio">Studio</Link></ListItem>
                        <ListItem><Link href="#works">Works</Link></ListItem>
                        <ListItem><Link href="#resume">Resume</Link></ListItem>
                        <ListItem><Link href="#contact">Contact</Link></ListItem>
                    </List>
                </Links>
                <Icons>
                    {/* Changed the image due to copyright problems */}
                    <Icon src="./img/search.png" />
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    );
};

export default Navbar;
