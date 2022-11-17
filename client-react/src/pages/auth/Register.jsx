import EmailIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";
import UsernameIcon from "@mui/icons-material/PeopleAltOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import { Card, Input, Row, Spacer } from "@nextui-org/react";
import Button from "components/common/button/Button";
import Loading from "components/common/loading/Loading";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registering } from "store/actions/auth.action";
import { AuthContainer } from "./Auth.style";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";

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
    <AnimatedLayout>
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
              color="primary"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChangeLogin}
              contentLeft={<EmailIcon />}
            />
            <Spacer y={1.2} />
            <Input
              bordered
              clearable
              color="primary"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChangeLogin}
              contentLeft={<UsernameIcon />}
            />
            <Spacer y={1.2} />
            <Input.Password
              bordered
              clearable
              color="primary"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChangeLogin}
              contentLeft={<LockIcon />}
            />
            <Spacer y={1.2} />
            <Input.Password
              bordered
              clearable
              color="primary"
              placeholder="Confirm password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChangeLogin}
              contentLeft={<LockResetOutlinedIcon />}
            />
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button
                color="danger"
                width="100px"
                type="submit"
                onClick={handleClearform}
              >
                Clear
              </Button>
              <Spacer x={1} />
              <Button
                color="success"
                width="100px"
                type="submit"
                onClick={onSubmitRegister}
                disabled={loading === true ? true : false}
              >
                {loading === true ? <Loading /> : "Confirm"}
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </AuthContainer>
    </AnimatedLayout>
  );
}

export default Register;
