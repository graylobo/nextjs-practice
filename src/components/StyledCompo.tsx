import React from "react";
import styled from "styled-components";
import FormitTest from "./FormitTest";

function StyledCompo() {
  return (
    <Wrapper>
      <Button>Original</Button>
      <PrimaryButton>Overridden</PrimaryButton>
    </Wrapper>
  );
}

export default StyledCompo;

const Wrapper = styled.div``;

const Test = styled(FormitTest)`
  background-color: yellow;
  .hi {
    color: white;
    display: none;
  }
`;
const Button = styled.button`
  border-radius: 3px;
  border: 1px solid red;
  color: orange;
  background: white;
`;

const PrimaryButton = styled(Button)`
  color: white;
  background: blue;
`;
