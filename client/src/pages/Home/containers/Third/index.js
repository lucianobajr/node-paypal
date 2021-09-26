import React from "react";

import { Section, InfoRow, InfoColumn, ImgWrapper, Img, Title } from "./styles";

import global from "../../../../assets/images/global.svg";

import { ContainerTwo } from "../../../../styles/global";
import { Zoom } from "react-reveal";

function Third() {
  return (
    <Section>
      <ContainerTwo>
        <Zoom center duration={2300} distance="20px">
          <InfoRow>
            <InfoColumn>
              <Title>We have customers all over the world</Title>
              <ImgWrapper>
                <Img src={global} alt="first image"></Img>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Zoom>
      </ContainerTwo>
    </Section>
  );
}

export default Third;
