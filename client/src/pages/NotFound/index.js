import React from "react";

import img404 from "../../assets/images/404.png";
import { FiArrowRight } from "react-icons/fi";
import { Wrapper, Content, Row, ImgWrapper, Img } from "./styles";

import { Container } from "../../styles/global";

import { Zoom, Fade } from "react-reveal";

function NotFound() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Content>
            <Zoom top duration={3000} distance="20px">
              <ImgWrapper>
                <Img src={img404} alt="" />
              </ImgWrapper>
            </Zoom>
            <Fade left duration={1300} distance="20px">
              <h1>This Page is a Ghost</h1>
              <p>
                Once alive and now dead, this ghost appears to have some
                unfinished business. Could it be with you? Or the treasure
                hidden under the floorboards of the old mansion in the hills
                that may never reach its rightful owner, a compassionate school
                teacher in Brooklyn.
              </p>
              <button>
                take me to a safe place{" "}
                <FiArrowRight size={24} color="#f95e53" />
              </button>
            </Fade>
          </Content>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default NotFound;
