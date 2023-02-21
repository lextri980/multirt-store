import {Button} from "antd";
import { ButtonContainer } from "./Button.style";

function TButton(props) {
  //! Props type
  //Require: children, onClick
  //Option: type, variant, color, disabled, size, width, textColor
  //Func: onClick
  const {
    children,
    type,
    variant,
    color,
    disabled,
    size,
    width,
    textColor,
    onClick,
  } = props;

  return (
    <ButtonContainer>
      <Button
        className={color || "primary"}
        type={variant || "primary"}
        htmlType={type || "button"}
        disabled={disabled || false}
        size={size || "default"}
        style={{
          width: width || "100px",
          color: textColor || "white",
        }}
        onClick={onClick}
      >
        {children}
      </Button>
    </ButtonContainer>
  );
}

export default TButton;
