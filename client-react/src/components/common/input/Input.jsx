import { InputContainer } from "./Input.style";
import EmailIcon from "@mui/icons-material/EmailOutlined";

function InputField() {
  return (
    <InputContainer>
      <label for="input" id="label">
        <EmailIcon />
      </label>
      <input id="input" type="text" placeholder="name" />
    </InputContainer>
  );
}

export default InputField;
