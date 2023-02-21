import { useOutletContext } from "react-router";
import { AuthContainer } from "./Auth.style";
import Login from "./Login";
import Register from "./Register";

function Auth() {
  //* Redux hooks

  //* Declare global variables

  //* Local state

  //* Hooks
  const [current] = useOutletContext();

  //* Other

  //! Condition rendering -------------------------------------------------------------
  //* Section: body
  let body;
  if (current === "login") {
    body = <Login />;
  } else {
    body = <Register />;
  }

  //! Return section ------------------------------------------------------------------
  return <AuthContainer>{body}</AuthContainer>;
}

export default Auth;
