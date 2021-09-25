import React from "react";

import { Section, InfoRow, InfoColumn, ImgWrapper, Img, Title } from "./styles";

import global from "../../../../assets/images/global.svg";

import { ContainerTwo } from "../../../../styles/global";

function Third() {
  return (
    <Section>
      <ContainerTwo>
        <InfoRow>
          <InfoColumn>
            <Title>We have customers all over the world</Title>
            <ImgWrapper>
              <Img src={global} alt="first image"></Img>
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </ContainerTwo>
    </Section>
  );
}

export default Third;
