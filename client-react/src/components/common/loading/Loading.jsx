import Loadings from "@nextui-org/react/loading";

function Loading(props) {
  return (
    <Loadings
      color={props.color || "white"}
      size={props.size || "sm"}
      type={props.type || "points"}
    />
  );
}

export default Loading;
