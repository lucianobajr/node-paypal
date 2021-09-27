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
  Info,
  Infos,
} from "./styles";

import firstImg from "../../../../assets/images/first.svg";

import user from "../../../../assets/icons/user.svg";
import local from "../../../../assets/icons/local.svg";
import server from "../../../../assets/icons/server.svg";

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
          <InfoRow>
            <Infos>
              <Info>
                <div className="circle">
                  <img src={user} alt="user icon" />
                </div>
                <div className="content">
                  <p id="value">90+</p>
                  <p id="info">Users</p>
                </div>
              </Info>
              <Info>
                <div className="circle">
                  <img src={local} alt="local icon" />
                </div>
                <div className="content">
                  <p id="value">30+</p>
                  <p id="info">Locations</p>
                </div>
              </Info>
              <Info>
                <div className="circle">
                  <img src={server} alt="server icon" />
                </div>
                <div className="content">
                  <p id="value">50+</p>
                  <p id="info">Servers</p>
                </div>
              </Info>
            </Infos>
          </InfoRow>
        </Fade>
      </ContainerTwo>
    </Section>
  );
}

export default First;
