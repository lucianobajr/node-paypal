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
  List,
  Item,
} from "./styles";

import secondImg from "../../../../assets/images/second.svg";

import { ContainerTwo } from "../../../../styles/global";
import { FiCheck } from "react-icons/fi";
import { Fade } from "react-reveal";

function Second() {
  return (
    <Section>
      <ContainerTwo>
        <Fade left duration={2300} distance="20px">
          <InfoRow>
            <InfoColumn>
              <ImgWrapper>
                <Img src={secondImg} alt="second image"></Img>
              </ImgWrapper>
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                <Heading>We Provide Many Features You Can Use</Heading>
                <Subtitle>
                  You can explore the features that we provide with fun and have
                  their own functions each feature.
                </Subtitle>
              </TextWrapper>
              <List>
                <Item>
                  <div className="circle">
                    <FiCheck size={40} color="#FFD86A" />
                  </div>
                  <p>Current Technologies</p>
                </Item>
                <Item>
                  <div className="circle">
                    <FiCheck size={40} color="#5EA077" />
                  </div>
                  <p>Stacks used in renowned companies</p>
                </Item>
                <Item>
                  <div className="circle">
                    <FiCheck size={40} color="#CF0606" />
                  </div>
                  <p>Monthly Debug</p>
                </Item>
              </List>
            </InfoColumn>
          </InfoRow>
        </Fade>
      </ContainerTwo>
    </Section>
  );
}

export default Second;
