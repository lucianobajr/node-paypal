import styled from "styled-components";

export const Section = styled.div`
  color: #fff;
  padding: 36px 36px 44px 36px;
  background: #fff;

  @media screen and (max-width: 576px) {
    padding: 36px 10px 44px 10px;
  }
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

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
`;

export const Logo = styled.div`
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

      color: #000000;

      margin-left: 13px;
    }
  }
  > p {
    margin-top: 19px;

    max-width: 238px;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;

    color: #000000;
  }

  @media screen and (max-width: 472px) {
    .content-logo {
      > p {
        font-size: 1.5rem;
      }
    }
    > p {
      max-width: 100%;

      font-size: 1rem;
    }
  }
`;
export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  .title-social {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    color: #000000;

    margin-bottom: 13px;
  }

  .content-social {
    display: flex;
    align-items: center;
  }
`;

export const BoxSocial = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(249, 94, 83, 0.23);

  & + div {
    margin-left: 20px;
  }
`;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  .title-newsletter {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    color: #000000;
  }

  .content-newsletter {
    width: 100%;
    margin-top: 13px;

    display: flex;
    flex-direction: row;
    align-items: center;

    flex-wrap: wrap;

    input {
      width: 376px;
      height: 64px;

      background: #ffffff;
      border: 2px solid #f95e53;
      box-sizing: border-box;
      border-radius: 10px;

      padding: 20px 32px;

      &::placeholder {
        font-family: "Roboto Slab";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;

        color: #000000;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 64px;
      height: 64px;

      background: #f53838;
      border-radius: 10px;

      margin-left: 38px;
    }
  }

  @media screen and (max-width: 606px) {
    .content-newsletter {
      button {
        margin-left: 5px;
      }
    }
  }

  @media screen and (max-width: 512px) {
    width: 100%;
    .content-newsletter {
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      input {
        width: 100%;
        &::placeholder {
          font-size: 14px;
        }
      }
      button {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
`;
