import { Card, Checkbox, Input, Row, Spacer, Text } from "@nextui-org/react";
import Button from "components/common/button/Button";
import Loading from "components/common/loading/Loading";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginning } from "store/actions/auth.action";
import { AuthContainer } from "./Auth.style";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";
import InputField from "components/common/input/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";

function Login() {
  //* Redux hooks
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  //* Hooks
  const { register } = useForm();

  //* Local state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //* Other
  const { email, password } = form;
  const schema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

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
  const onSubmitLogin = async () => {
    dispatch(loginning(form));
  };

  return (
    <AnimatedLayout>
      <AuthContainer>
        <Card css={{ mw: "400px", mh: "400px" }}>
          <Card.Header className="card-header">
            <p className="title-card">Login</p>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "30px", px: "25px" }}>
            <InputField name='email' register={register}/>
            <Spacer y={1.2} />
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
            <Row justify="space-between">
              <Checkbox defaultSelected={false}>
                <Text size={14}>Remember me</Text>
              </Checkbox>
              <Text size={14} className="forgot-pw">
                Forgot password?
              </Text>
            </Row>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button color="danger" width="100px" onClick={handleClearform}>
                Clear
              </Button>
              <Spacer x={1} />
              <Button
                color="success"
                width="100px"
                type="submit"
                disabled={loading === true ? true : false}
                onClick={onSubmitLogin}
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

export default Login;
