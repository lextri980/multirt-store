import { Card, Input, Row, Spacer } from "@nextui-org/react";
import { AuthContainer } from "./Auth.style";
import Button from "components/common/button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registering } from "store/actions/auth.action";
import Loading from "components/common/loading/Loading";
import { toast } from "react-toastify";

function Register() {
  //* Redux hooks
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  //* Local state
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  //* Other
  const { email, name, password, confirmPassword } = form;

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
      name: "",
      password: "",
      confirmPassword: "",
    });
  };

  //! async (onSubmitLogin): click to submit login form
  const onSubmitRegister = () => {
    dispatch(registering(form));
    handleClearform();
  };

  return (
    <AuthContainer>
      <Card css={{ mw: "400px", mh: "700px" }}>
        <Card.Header className="card-header">
          <p className="title-card">Register</p>
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
          <Input
            bordered
            clearable
            labelPlaceholder="Name"
            name="name"
            value={name}
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
          <Spacer y={1.8} />
          <Input.Password
            bordered
            clearable
            labelPlaceholder="Confirm password"
            name="confirmPassword"
            value={confirmPassword}
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
              type="submit"
              onClick={handleClearform}
            />
            <Spacer x={1} />
            <Button
              name={loading === true ? <Loading /> : "Confirm"}
              color="success"
              width="100px"
              type="submit"
              onClick={onSubmitRegister}
              disabled={loading === true ? true : false}
            />
          </Row>
        </Card.Footer>
      </Card>
    </AuthContainer>
  );
}

export default Register;
