import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  width: 370px;

  background: #ffffff;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 14px 6px 69px 6px;
  margin: 10px 0;
  >img{
    max-width: 256px;
    max-height: 230px;
  }

  h1 {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 900;
    font-size: 36px;

    color: #000000;
    margin-bottom: 36px;
  }

  #description {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    text-align: center;

    color: #000000;

    margin-bottom: 29px;
  }

  #price {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 47px;
    text-align: center;

    color: #000000;

    margin-bottom: 47px;
  }

  button {
    width: 199px;
    height: 49px;

    background: transparent;

    border: 2px solid #f53838;
    box-sizing: border-box;
    border-radius: 30px;

    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;

    text-align: center;

    color: #f53838;

    transition: all 0.8s ease-in-out 0s;

    &:hover {
      background: ${darken(0.1, "#FFF")};
    }
  }

  transition: all 0.4s ease-in-out 0s;
  cursor: pointer;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.05);
    perspective: 1000px;
  }

  @media screen and (max-width: 390px) {
    width: 100%;
    h1 {
      font-size: 1.5rem;
    }
    #description {
      font-size: 1rem;
    }
    #price {
      font-size: 1.25rem;
    }

    button {
      width: 70%;
      font-size: 1.25rem;
    }
  }
`;