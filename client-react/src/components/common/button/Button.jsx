import Buttonx from "@nextui-org/react/button";
import { ButtonContainer } from "./Button.style";

function Button(props) {
  return (
    <ButtonContainer>
      <Buttonx
        className={props.color || "primary"}
        onClick={props.onClick}
        aria-label="Common-btn"
        bordered={props.border || false}
        type={props.type || ""}
        style={{
          width: props.width || "170px",
          color: props.text,
          minWidth: "50px",
        }}
        disabled={props.disabled || false}
      >
        {props.children}
      </Buttonx>
    </ButtonContainer>
  );
}

export default Button;
