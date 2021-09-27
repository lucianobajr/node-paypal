import styled from "styled-components";
import { darken } from "polished";

export const Section = styled.div`
  color: #fff;
  padding: 83px 0px 69px 0;
  background: #fff;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 606px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;
export const Heading = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: bold;
  font-size: 48px;

  color: #000000;

  @media screen and (max-width: 392px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;

  color: #000000;

  margin: 57px 0;

  @media screen and (max-width: 392px) {
    font-size: 1.5rem;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Button = styled.button`
  width: 376px;
  height: 71px;
  left: 29px;
  top: 473px;

  background: #f95e53;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;

  color: #ffffff;

  transition: all 0.8s ease-in-out 0s;

  &:hover {
    background: ${darken(0.2, "#f95e53")};
    transform: scale(1.03);
  }

  @media screen and (max-width: 392px) {
    width: 100%;

    font-size: 1.25rem;
  }
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 20px 0;

  @media screen and (max-width: 726px) {
    display: none;
    padding: 0;
  }
`;

export const Info = styled.div`
  display: flex;

  & + div {
    padding-left: 5%;
    padding-right: 5%;
    border-left: 2px solid #eeeeee;
  }

  .circle {
    width: 68px;
    height: 68px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(249, 94, 83, 0.23);

    margin-right: 23px;
  }

  .content {
    display: flex;
    flex-direction: column;
    #value {
      font-family: "Roboto Slab";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;

      color: #000000;
    }

    #info {
      font-family: "Roboto Slab";
      font-style: normal;
      font-weight: 300;
      font-size: 24px;

      color: #000000;
    }
  }

  @media screen and (max-width: 726px) {
    display: none;
    
  }
`;
