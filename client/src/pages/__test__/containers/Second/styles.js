import styled from "styled-components";

export const Section = styled.div`
  color: #fff;
  padding: 83px 0px 69px 0;
  background: #f95e53;
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
    flex-direction: column;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 553px;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;
export const Heading = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 47px;

  color: #ffffff;
`;

export const Subtitle = styled.p`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;

  color: #ffffff;

  margin: 25px 0;
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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  max-width: 100%;

  & + li {
    margin-top: 24px;
  }

  .circle {
    width: 50px;
    height: 50px;

    border-radius: 50%;

    background: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-right: 15px;
  }

  p {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    word-wrap: break-word;
    /* identical to box height */

    color: #ffffff;

    max-width: 100%;
  }
`;
