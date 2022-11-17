import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { color } from "themes/colors";
import { FileContainer } from "./File.style";

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
      <div className="input-file pointer">
        <label for="file" className="pointer">
          <AttachFileRoundedIcon style={{ fontSize: "20px" }} />
          {props.fileTitle || "Choose a file"}
        </label>
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
