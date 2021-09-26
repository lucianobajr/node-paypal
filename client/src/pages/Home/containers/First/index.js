import React from "react";

import {
  Section,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Button,
} from "./styles";

import firstImg from "../../../../assets/images/first.svg";

import { ContainerTwo } from "../../../../styles/global";

import { Fade } from "react-reveal";

function First() {
  return (
    <Section>
      <ContainerTwo>
        <Fade top duration={2300} distance="20px">
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <Heading>Want anything to be easy with Experience.</Heading>
                <Subtitle>
                  Discover the best references in technology and user{" "}
                  <strong>experience</strong>
                </Subtitle>

                <Button>Get Started!</Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src={firstImg} alt="first image"></Img>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Fade>
      </ContainerTwo>
    </Section>
  );
}

export default First;
