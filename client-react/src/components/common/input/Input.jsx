import AbcIcon from "@mui/icons-material/Abc";
import EyeOn from "@mui/icons-material/Visibility";
import EyeOff from "@mui/icons-material/VisibilityOff";
import { InputContainer } from "./Input.style";

function Input(props) {
  //! Props type
  //Require: value, register
  //Option: placeholder, type, label, (password, onPassword), max
  //Func: onChange, register, onPassword
  const {
    password,
    onPassword,
    placeholder,
    value,
    register,
    type,
    label,
    max
  } = props;

  return (
    <InputContainer>
      <label htmlFor={value} id="label">
        {label || <AbcIcon />}
      </label>
      <input
        maxLength={max}
        type={type === false ? "password" : "text"}
        placeholder={placeholder || "Name"}
        {...register(value)}
      />
      {password ? (
        <label htmlFor={value} id="pw" onClick={onPassword}>
          {type === false ? (
            <EyeOn sx={{ fontSize: "18px" }} />
          ) : (
            <EyeOff sx={{ fontSize: "18px" }} />
          )}
        </label>
      ) : (
        ""
      )}
    </InputContainer>
  );
}

export default Input;
