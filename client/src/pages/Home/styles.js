import styled from "styled-components";

import { darken } from "polished";

export const Wrapper = styled.div`
  padding: 48px 0 0 0;
  background: #fff;
`;

export const Content = styled.div``;

export const Logo = styled.div`
  display: flex;
  p {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 40px;

    color: #000000;
    margin-left: 13px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  background-color: ${({ imgStart }) => (imgStart ? "#F95E53" : "#FFF")};
`;

export const Column = styled.div`
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

export const ColumnSpecial = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 100%;
  flex-basis: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ red }) => (red ? "#F95E53" : "#FFF")};
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

export const ImgWrapperSpecial = styled.div`
  max-width: 100%;
`;

export const ImgSpecial = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 683px;
`;
