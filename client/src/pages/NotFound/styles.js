import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  background-color: #f95e53;
  padding: 24px 0 50px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  max-width: 100%;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;

    color: #ffffff;
    margin-top: 29px;
  }

  p {
    max-width: 694px;

    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;

    color: #ffffff;

    margin-top: 32px;
  }

  button {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 420px;
    height: 81px;

    background: #ffffff;
    border-radius: 10px;

    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    color: #f95e53;

    > svg {
      margin-left: 37px;
    }

    transition: all 0.8s ease-in-out 0s;

    margin-bottom: 50px;

    &:hover {
      color: ${darken(0.1, "#f95e53")};
      background-color: ${darken(0.1, "#FFF")};
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px;

    p {
      max-width: 100%;
      margin-bottom: 10px;
    }

    button {
      width: 100%;
    }
  }
  @media screen and (max-width: 362px) {
    padding: 20px;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      width: 100%;
      font-size: 1rem;
      > svg {
        margin-left: 10px;
      }
    }
  }
`;

export const ImgWrapper = styled.div`
  max-width: 577px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 523px;
`;
