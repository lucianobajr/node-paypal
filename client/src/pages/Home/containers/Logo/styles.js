import styled from "styled-components";

export const Section = styled.div`
  color: #fff;
  padding: 48px  0 0 0;
  background: #fff;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 100%;
  flex-basis: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  .content-logo {
    display: flex;
    flex-direction: row;

    > p {
      font-family: "Roboto Slab";
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 40px;

      color: #000000;
      margin-left: 13px;
    }
  }
`;
