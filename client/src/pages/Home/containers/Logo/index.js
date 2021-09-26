import React from "react";

import { Section, InfoRow, InfoColumn, Content } from "./styles";

import logo from "../../../../assets/icons/logo.svg";
import { ContainerTwo } from "../../../../styles/global";
import { Zoom } from "react-reveal";

function Logo() {
  return (
    <Section>
      <ContainerTwo>
        <Zoom top duration={2300} distance="20px">
          <InfoRow>
            <InfoColumn>
              <Content>
                <div className="content-logo">
                  <img src={logo} alt="logo experience" />
                  <p>Experience</p>
                </div>
              </Content>
            </InfoColumn>
          </InfoRow>
        </Zoom>
      </ContainerTwo>
    </Section>
  );
}

export default Logo;
