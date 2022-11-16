import { Input } from "@nextui-org/react";
import React from "react";
import { FileContainer } from "./File.style";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import { color } from "themes/colors";

function File(props) {
  return (
    <FileContainer>
      <input
        type="file"
        id="file"
        class="inputfile"
        name={props.value}
        value={props.value}
        onChange={props.onChange}
      />
      <div className="input-file">
        <AttachFileRoundedIcon style={{ fontSize: "20px" }} />
        <label for="file">{props.fileTitle || 'Choose a file'}</label>
        <ClearRoundedIcon
          style={{ fontSize: "20px", color: color.redP }}
          onClick={props.clear}
        />
      </div>
      <p>{props.name}</p>
    </FileContainer>
  );
}

export default File;
