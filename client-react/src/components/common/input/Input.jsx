import { InputContainer } from "./Input.style";
import AbcIcon from "@mui/icons-material/Abc";

function InputField(props) {
  //! Props type
  //Require: name, value, onChange, register
  //Option: placeholder, type, label
  //Func: onChange, register
  const { placeholder, value, name, register, type, label, onChange } = props;
  
  return (
    <InputContainer>
      <label htmlFor="input" id="label">
        {label || <AbcIcon />}
      </label>
      <input
        id="input"
        type={type || "text"}
        placeholder={placeholder || "Name"}
        name={name}
        value={value}
        onChange={onChange}
        {...register(name)}
      />
    </InputContainer>
  );
}

export default InputField;
