import { Card, Input, Row, Spacer } from "@nextui-org/react";
import Button from "components/common/button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginning } from "store/actions/auth.action";
import { AuthContainer } from "./Auth.style";

function Login() {
  //* Redux hooks
  const dispatch = useDispatch();

  //* Local state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //* Hooks

  //* Other
  const { email, password } = form;

  //@ (handleChangeLogin): handle change input
  const handleChangeLogin = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //@ (handleClearform): click to clear form text
  const handleClearform = () => {
    setForm({
      email: "",
      password: "",
    });
  };

  //! async (onSubmitLogin): click to submit login form
  const onSubmitLogin = () => {
    dispatch(loginning(form));
  };

  return (
    <AuthContainer>
      <Card css={{ mw: "400px", mh: "400px" }}>
        <Card.Header className="card-header">
          <p className="title-card">Login</p>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "40px", px: "25px" }}>
          <Input
            bordered
            clearable
            labelPlaceholder="Email"
            name="email"
            value={email}
            onChange={handleChangeLogin}
          />
          <Spacer y={1.8} />
          <Input.Password
            bordered
            clearable
            labelPlaceholder="Password"
            name="password"
            value={password}
            onChange={handleChangeLogin}
          />
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="flex-end">
            <Button
              name="Clear"
              color="danger"
              width="100px"
              onClick={handleClearform}
            />
            <Spacer x={1} />
            <Button
              name="Confirm"
              color="success"
              width="100px"
              type="submit"
              onClick={onSubmitLogin}
            />
          </Row>
        </Card.Footer>
      </Card>
    </AuthContainer>
  );
}

export default Login;
