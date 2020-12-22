import React from "react";

import { Rotate } from "react-reveal";

import { Wrapper, Content, Box } from "./styles";

import smile from "../../assets/images/smile.svg";

import { useHistory } from "react-router-dom";

function Success() {
  const history = useHistory();

  function handle() {
    history.push("/");
  }

  return (
    <Wrapper>
      <Content>
        <Rotate top duration={1300} distance="20px">
          <Box>
            <img src={smile} alt="" />
            <div className="content">
              <p id="title">Success!</p>
              <p id="content">Thank you to collaboration!</p>
              <button onClick={handle}>Continue</button>
            </div>
          </Box>
        </Rotate>
      </Content>
    </Wrapper>
  );
}

export default Success;
