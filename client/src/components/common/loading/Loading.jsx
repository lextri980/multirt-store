import React from "react";
import { LoadingContainer } from "./Loading.style";
import { Spin } from "antd";
import AnchorOutlinedIcon from "@mui/icons-material/AnchorOutlined";

function Loading(props) {
  //! Props type
  //Require:
  //Option: color, size
  //Func:
  const { color, size } = props;

  return (
    <LoadingContainer color={color}>
      <AnchorOutlinedIcon
        className="spin"
        style={{
          color: color,
          fontSize: size,
        }}
      />
    </LoadingContainer>
  );
}

export default Loading;
