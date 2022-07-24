import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/mw-bg.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text};

  h1 {
    font-size: ${(props) => props.theme.fontbig};
    text-shadow: 5px 5px 5px 5px ${(props) => props.theme.body};
  }
  h2 {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title>
        <h1 data-scroll data-scroll-speed="4">
          Mega World
        </h1>
        <h2 data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
          Meta Verse
        </h2>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop></video>
    </VideoContainer>
  );
};

export default CoverVideo;
