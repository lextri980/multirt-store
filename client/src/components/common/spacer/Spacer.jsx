import { SpacerContainer } from "./Spacer.style";

function Spacer(props) {
  //! Props type
  //Option: x, y
  const { x, y } = props;

  return (
    <SpacerContainer x={`${x}px` || "0"} y={`${y}px` || "0"}></SpacerContainer>
  );
}

export default Spacer;
