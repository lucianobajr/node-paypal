import React from "react";

import { Wrapper, Content, Header, Footer, Main } from "./styles";
import { Zoom } from "react-reveal";

import logo from "../../assets/icons/logo.svg";
import firstImg from "../../assets/images/first.svg";

function Home() {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Zoom top duration={1300} distance="20px">
            <div className="logo-box">
              <img id="logo" src={logo} alt="" />
              <p id="title">Experience</p>
            </div>
          </Zoom>
        </Header>
        <Main>
          <div className="fs-content">
            <div className="box">
              <p id="fs-text">Want anything to be easy with Experience.</p>

              <p id="sec-text">
                Discover the best references in technology and user <strong>experience</strong>
              </p>

              <button id="btn-box">Get Started</button>
            </div>
            <img src={firstImg} alt="" />
          </div>
        </Main>

        <Footer></Footer>
      </Content>
    </Wrapper>
  );
}

export default Home;
