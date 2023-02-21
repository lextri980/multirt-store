import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { Card, Checkbox, Form, Input } from "antd";
import TButton from "components/common/button/Button";
import Loading from "components/common/loading/Loading";
import Spacer from "components/common/spacer/Spacer";
import { FORMAT, REQUIRED } from "constants/message";
import { emailRegex } from "constants/regex.const";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginning } from "store/actions/auth.action";
import { AuthContainer } from "./Auth.style";

function Login() {
  //* Redux hooks
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  //* Declare global variables

  //* Local state

  //* Hooks

  //* Other
  const rules = {
    email: [
      {
        required: true,
        message: `Email ${REQUIRED}`,
      },
      {
        pattern: emailRegex,
        message: `${FORMAT} email`,
      },
    ],
    password: [
      {
        required: true,
        message: `Password ${REQUIRED}`,
      },
    ],
  };

  //@ (onSubmitLogin): Handle submit login
  const onSubmitLogin = (form) => {
    dispatch(loginning(form));
  };

  //! Condition rendering -------------------------------------------------------------

  //! Return section ----------------------------------W--------------------------------
  return (
    <AuthContainer>
      <Card title="Login" className="card-login">
        <Form name="login-form" onFinish={onSubmitLogin}>
          <Form.Item name="email" className="text-left" rules={rules.email}>
            <Input placeholder="Email" prefix={<AccountCircleOutlinedIcon />} />
          </Form.Item>
          <Form.Item
            name="password"
            className="text-left"
            rules={rules.password}
          >
            <Input.Password
              placeholder="Password"
              prefix={<HttpsOutlinedIcon />}
            />
          </Form.Item>

          <div className="row">
            <Form.Item name="remember" style={{ margin: "auto 0" }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to="#">Forgot password</Link>
          </div>

          <div className="form-footer">
            <TButton color="danger">Cancel</TButton>
            <Spacer x={10} />
            <TButton type="primary" color="success" htmlType="submit">
              {loading === false ? <Loading color="" /> : "Login"}
            </TButton>
          </div>
        </Form>
      </Card>
    </AuthContainer>
  );
}

export default Login;
