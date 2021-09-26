import styled from "styled-components";

export const Section = styled.div`
  color: #fff;
  padding: 83px 0px 69px 0;
  background: #fff;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  flex: 1;
  max-width: 100%;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 47px;

  color: #000000;

  margin-bottom: 65px;
`;

export const ImgWrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 1000px;
  object-fit: contain;
`;
