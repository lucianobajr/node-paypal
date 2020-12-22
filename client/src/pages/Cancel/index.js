import React from "react";

import { Rotate } from "react-reveal";

import { Wrapper, Content, Box } from "./styles";

import crying from "../../assets/images/crying.svg";

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
            <img src={crying} alt="" />
            <div className="content">
              <p id="title">Cancel!</p>
              <p id="content">Something is wrong,try again!</p>
              <button onClick={handle}>Continue</button>
            </div>
          </Box>
        </Rotate>
      </Content>
    </Wrapper>
  );
}

export default Success;
