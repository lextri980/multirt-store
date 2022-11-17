import React from "react";
import { ButtonLightContainer } from "./Button.style";

function ButtonLight(props) {
  return (
    <ButtonLightContainer onClick={props.onClick} aria-label="Common-btn-light">
      <div className="child-content-btn">{props.children}</div>
    </ButtonLightContainer>
  );
}

export default ButtonLight;
