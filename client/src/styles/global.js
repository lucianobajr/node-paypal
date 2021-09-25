import styled, { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        border:0;
        box-sizing:border-box;
        -webkit-box-sizing:border-box;
    }

    *:focus{
        outline:0;    
    }

    html,body,#root {
        height: 100%;
        font-family: 'Roboto Slab', serif;
    }

    body {
        -webkit-font-smoothing: antialiased;
        display:block;
        overflow:visible;
    }

    a{
        text-decoration: none;
    }

    button {
        cursor: pointer;
        font-size:16px;
    }

    ul{
        list-style:none;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;
export const ContainerTwo = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 25px;
  padding-left: 25px;
  @media screen and(max-width:991px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;
