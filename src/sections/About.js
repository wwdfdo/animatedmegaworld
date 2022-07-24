import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vh;
  overflow: hidden;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
`;
const About = () => {
  return (
    <Section>
      <Title>About Us</Title>
    </Section>
  );
};

export default About;
