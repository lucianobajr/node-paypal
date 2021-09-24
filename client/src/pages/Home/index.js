import React from "react";

import {
  Logo,
  Wrapper,
  Row,
  Column,
  ImgWrapper,
  Img,
  ColumnSpecial,
  ImgWrapperSpecial,
  ImgSpecial,
} from "./styles";
import { Zoom, Fade } from "react-reveal";

import logo from "../../assets/icons/logo.svg";
import firstImg from "../../assets/images/first.svg";
import secondImg from "../../assets/images/second.svg";
import global from "../../assets/images/global.svg";
import partners from "../../assets/images/partners.svg";

import iconUser from "../../assets/icons/user.svg";
import iconServer from "../../assets/icons/server.svg";
import iconLocal from "../../assets/icons/local.svg";

import { products } from "../../data/products.json";

import { FiCheck } from "react-icons/fi";

import { Container } from "../../styles/global";

import Items from "../../components/Products";
import Footer from "../../components/Footer";
function Home() {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <img src={logo} alt="" />
          <p>Experience</p>
        </Logo>
        <Row>
          <Column>
            <h1>Want anything to be easy with Experience.</h1>
            <p>
              Discover the best references in technology and user{" "}
              <strong>experience</strong>
            </p>
            <button>Get Started!</button>
          </Column>
          <Column>
            <ImgWrapper>
              <Img src={firstImg} alt="" />
            </ImgWrapper>
          </Column>
        </Row>
        <Row imgStart="start">
          <Column>
            <ImgWrapper>
              <Img src={secondImg} alt="" />
            </ImgWrapper>
          </Column>
          <Column>
            <h1>We Provide Many Features You Can Use</h1>
            <p>
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul>
              <li>
                <div>
                  <FiCheck size={40} color="#FFD86A" />
                </div>
                <p>Current Technologies</p>
              </li>
              <li>
                <div>
                  <FiCheck size={40} color="#5EA077" />
                </div>
                <p>Stacks used in renowned companies</p>
              </li>
              <li>
                <div>
                  <FiCheck size={40} color="#CF0606" />
                </div>
                <p>Monthly Debug</p>
              </li>
            </ul>
          </Column>
        </Row>
        <Row>
          <ColumnSpecial>
            <ImgWrapperSpecial>
              <ImgSpecial src={global} alt="" />
            </ImgWrapperSpecial>
          </ColumnSpecial>
        </Row>
        <Row>
          <ColumnSpecial red="red">
            <h1>Some of our Services</h1>
            <div className="items">
              {products.map((product) => (
                <Items
                  img={product.img}
                  title={product.titulo}
                  description={product.descricao}
                  value={product.preco}
                  id={product.id}
                  key={product.id}
                />
              ))}
            </div>
          </ColumnSpecial>
        </Row>
      </Container>
      <Footer />
    </Wrapper>
  );
}

export default Home;
