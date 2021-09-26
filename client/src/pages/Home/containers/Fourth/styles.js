import styled from "styled-components";

export const Section = styled.div`
  color: #fff;
  padding: 83px 0px 69px 0;
  background: #f95e53;
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
  font-weight: 900;
  font-size: 36px;
  line-height: 47px;

  color: #ffffff;

  margin-bottom: 65px;
  @media screen and (max-width: 790px) {
    font-size: 2rem;
  }
`;

export const ProductsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding:0 0 52px 0;

  @media screen and (max-width: 790px) {
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
  }
`;
