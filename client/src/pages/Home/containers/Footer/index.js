import React from "react";
import { ContainerTwo } from "../../../../styles/global";

import {
  Section,
  InfoRow,
  InfoColumn,
  Content,
  Logo,
  Newsletter,
  SocialNetworks,
  BoxSocial,
} from "./styles";

import logo from "../../../../assets/icons/logo.svg";
import { FiFacebook, FiInstagram, FiSend, FiTwitter } from "react-icons/fi";
import { Fade } from "react-reveal";

function Footer() {
  return (
    <Section>
      <ContainerTwo>
        <Fade bottom duration={2300} distance="20px">
          <InfoRow>
            <InfoColumn>
              <Content>
                <Logo>
                  <div className="content-logo">
                    <img src={logo} alt="logo experience" />
                    <p>Experience</p>
                  </div>
                  <p>Your technology and experience platform</p>
                </Logo>
                <SocialNetworks>
                  <p className="title-social">Social Networks</p>
                  <div className="content-social">
                    <BoxSocial>
                      <FiFacebook size={40} color="#F53838" />
                    </BoxSocial>
                    <BoxSocial>
                      <FiTwitter size={40} color="#F53838" />
                    </BoxSocial>
                    <BoxSocial>
                      <FiInstagram size={40} color="#F53838" />
                    </BoxSocial>
                  </div>
                </SocialNetworks>
                <Newsletter>
                  <p className="title-newsletter">Newsletter</p>
                  <form className="content-newsletter">
                    <input
                      type="text"
                      placeholder="name@company.com"
                      name="email"
                    />
                    <button>
                      <FiSend size={34} color="#FFF" />
                    </button>
                  </form>
                </Newsletter>
              </Content>
            </InfoColumn>
          </InfoRow>
        </Fade>
      </ContainerTwo>
    </Section>
  );
}

export default Footer;
