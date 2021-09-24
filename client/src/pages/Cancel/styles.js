import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  background-color: #f95e53;

  font-family: "Roboto Slab";
`;

export const Content = styled.div`
  width: 1366px;
  height: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 528px) {
    width: 100%;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 200px;
    z-index: 1;

    display: block;
    position: absolute;

    margin-top: -120px;
  }

  .content {
    height: 500px;
    width: 500px;
    background-color: #fff;

    border-radius: 10px;

    padding-top: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 1px 1px 10px 1px rgba(49, 22, 159, 0.1);

    #title {
      font-weight: bold;
      font-size: 35px;
      text-align: center;
      font-family: "Roboto Slab";
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      margin-bottom: 70px;
      color: #000;
    }
    #content {
      font-family: "Roboto Slab";
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 1.5;
      text-align: center;
    }

    button {
      margin-top: 80px;

      background-color: #f95e53;

      text-align: center;
      font-family: "Roboto Slab";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;

      border-radius: 30px;

      cursor: pointer;

      height: 50px;
      width: 200px;

      color: #ffffff;


      transition: all 0.8s ease-in-out 0s;

      &:hover {
        background-color: ${darken(0.1, "#f95e53")};
      }
    }
  }
  @media screen and (max-width: 528px) {
    width: 100%;

    img {
      width: 80%;
      height: 150px;
    }
    .content {
      min-height: 500px;

      width: 90%;
    }
    button {
      max-width: 80% !important;
      margin-top: 20px;
    }
  }
`;
