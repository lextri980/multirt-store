import React from "react";
import { ButtonLightContainer } from "./Button.style";

function ButtonLight(props) {
  return (
    <ButtonLightContainer onClick={props.onClick} aria-label="Common-btn-light">
      <p>{props.name}</p>
      <span>{props.element}</span>
    </ButtonLightContainer>
  );
}

export default ButtonLight;
