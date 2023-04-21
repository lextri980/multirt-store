import { Autocomplete, TextField } from "@mui/material";
import { SelectBoxContainer } from "./Select.style";

function Select(props) {
  //! Props type
  //Require: options: {value, label}, value
  //Option: defaultValue, onChange, multiple, label, clearable
  //Func: onChange
  const { options, defaultValue, onChange, label, multiple, clearable } = props;

  const style = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "0.75rem",

      legend: {
        marginLeft: "10px",
      },
    },
    "& .MuiAutocomplete-inputRoot": {
      paddingLeft: "20px !important",
      borderRadius: "0.75rem",
    },
    "& .MuiInputLabel-outlined": {
      paddingLeft: "10px",
    },
    "& .MuiInputLabel-shrink": {
      marginLeft: "10px",
      paddingLeft: "10px",
      paddingRight: 0,
      background: "white",
    },
  };

  return (
    <SelectBoxContainer>
      <Autocomplete
        // sx={style}
        onChange={onChange}
        options={options}
        size="small"
        disableClearable={clearable ? false : true}
        multiple={multiple ? true : false}
        defaultValue={defaultValue || options[0]}
        renderInput={(params) => (
          <TextField {...params} sx={style} label={label || "Selector"} />
        )}
      />
    </SelectBoxContainer>
  );
}

export default Select;
