import { useOutletContext } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Auth() {
  const [isActive] = useOutletContext();
  let body;
  if (isActive === true) {
    body = <Login />;
  } else {
    body = <Register />;
  }

  return <div className="auth-container">{body}</div>;
}

export default Auth;
