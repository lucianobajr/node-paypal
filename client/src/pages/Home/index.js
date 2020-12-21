import React from "react";

import { Wrapper, Content, Header, Footer, Main } from "./styles";
import { Zoom, Fade } from "react-reveal";

import logo from "../../assets/icons/logo.svg";
import firstImg from "../../assets/images/first.svg";
import secondImg from "../../assets/images/second.svg";
import global from "../../assets/images/global.svg";
import partners from "../../assets/images/partners.svg";

import iconUser from "../../assets/icons/user.svg";
import iconServer from "../../assets/icons/server.svg";
import iconLocal from "../../assets/icons/local.svg";

import { FaCheck } from "react-icons/fa";

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
            <Fade left duration={1300} distance="20px">
              <div className="box">
                <p id="fs-text">Want anything to be easy with Experience.</p>

                <p id="sec-text">
                  Discover the best references in technology and user{" "}
                  <strong>experience</strong>
                </p>

                <button id="btn-box">Get Started</button>
              </div>
            </Fade>
            <Fade right duration={1300} distance="20px">
              <img src={firstImg} alt="" />
            </Fade>
          </div>
          <Fade left duration={3300} distance="20px">
            <div className="sec-content">
              <div className="boxes margin-box">
                <div className="icons-box">
                  <img src={iconUser} alt="" />
                </div>
                <div className="texts">
                  <p className="value">90+</p>
                  <p className="type">Users</p>
                </div>
              </div>
              <div className="boxes margin-box">
                <div className="icons-box">
                  <img src={iconLocal} alt="" />
                </div>
                <div className="texts">
                  <p className="value">30+</p>
                  <p className="type">Locations</p>
                </div>
              </div>
              <div className="boxes">
                <div className="icons-box">
                  <img src={iconServer} alt="" />
                </div>
                <div className="texts">
                  <p className="value">50+</p>
                  <p className="type">Servers</p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right duration={3500} distance="20px">
            <div className="third-content">
              <img src={secondImg} alt="" />
              <div className="third-box">
                <p id="title">We Provide Many Features You Can Use</p>
                <p id="subtitle">
                  You can explore the features that we provide with fun and have
                  their own functions each feature.
                </p>

                <ul className="list">
                  <li>
                    <div className="box-check">
                      <FaCheck size={13} color="#fff" />
                    </div>
                    <p>Current Technologies</p>
                  </li>
                  <li>
                    <div className="box-check">
                      <FaCheck size={13} color="#fff" />
                    </div>
                    <p>Stacks used in renowned companies</p>
                  </li>
                  <li>
                    <div className="box-check">
                      <FaCheck size={13} color="#fff" />
                    </div>
                    <p>Monthly Debug</p>
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
          <Fade right duration={3500} distance="20px">
            <div className="four-content">
              <p id="title">We have customers all over the world</p>
              <img src={global} alt="" />
              <img src={partners} alt="" />
            </div>
          </Fade>
        </Main>

        <Footer></Footer>
      </Content>
    </Wrapper>
  );
}

export default Home;
