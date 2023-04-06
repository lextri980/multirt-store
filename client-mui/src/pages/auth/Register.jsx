import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { Button, Card, Form, Input } from "antd";
import TButton from "components/common/button/Button";
import Spacer from "components/common/spacer/Spacer";
import { color } from "themes/colors";
import { AuthContainer } from "./Auth.style";

function Register() {
  //* Redux hooks

  //* Declare global variables

  //* Local state

  //* Hooks

  //* Other
  const rules = {
    login: [
      {
        required: true,
        message: "Please input your username!",
      },
    ],
    register: [
      {
        required: true,
        message: "Please input your password!",
      },
    ],
  };

  //! Condition rendering -------------------------------------------------------------

  //@ async (onSubmitRegister): Handle submit register
  const onSubmitRegister = (form) => {
    console.log(form);
  };

  //! Return section ------------------------------------------------------------------
  return (
    <AuthContainer>
      <Card title="Register" className="card-login">
        <Form name="login-form" onFinish={onSubmitRegister} autoComplete="off">
          <Form.Item name="username" className="text-left" rules={rules.login}>
            <Input
              placeholder="Username"
              prefix={<AccountCircleOutlinedIcon />}
            />
          </Form.Item>
          <Form.Item name="username" className="text-left" rules={rules.login}>
            <Input
              placeholder="Username"
              prefix={<AccountCircleOutlinedIcon />}
            />
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

          <div className="form-footer">
            <TButton type="primary" color="danger" className="mt-20 mr-10">
              Cancel
            </TButton>
            <Spacer x={10} />
            <TButton
              type="primary"
              color="success"
              style={{ background: color.green }}
              htmlType="submit"
              className="mt-20 ml-10"
            >
              Register
            </TButton>
          </div>
        </Form>
      </Card>
    </AuthContainer>
  );
}

export default Register;
