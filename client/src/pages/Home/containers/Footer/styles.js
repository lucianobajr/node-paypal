import styled from "styled-components";

export const Section = styled.div`
  color: #fff;
  padding: 56px 36px 44px 36px;
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
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;

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
`;
export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: column;

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

  .title-newsletter {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    color: #000000;
  }

  .content-newsletter {
    margin-top: 13px;

    display: flex;
    flex-direction: row;
    align-items: center;

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
`;
