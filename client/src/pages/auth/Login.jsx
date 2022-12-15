import { yupResolver } from "@hookform/resolvers/yup";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";
import { Card, Checkbox, Row, Spacer, Text } from "@nextui-org/react";
import Button from "components/common/button/Button";
import ErrorMessage from "components/common/errorMessage/ErrorMessage";
import Input from "components/common/input/Input";
import Loading from "components/common/loading/Loading";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";
import { FORMAT, REQUIRED } from "constants/message";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginning } from "store/actions/auth.action";
import * as yup from "yup";
import { AuthContainer } from "./Auth.style";

function Login() {
  //* Redux hooks
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  //* Hooks
  const schema = yup.object().shape({
    email: yup.string().required(`Email ${REQUIRED}`).email(`${FORMAT} email`),
    password: yup.string().required(`Password ${REQUIRED}`),
  });

  const {
    register,
    handleSubmit,
    resetField,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //* Local state
  const [typePw, setTypePw] = useState(false);

  //@ (handleClearform): click to clear form text
  const handleClearform = () => {
    resetField("email");
    resetField("password");
  };

  //! async (onSubmitLogin): click to submit login form
  const onSubmitLogin = (form) => {
    dispatch(loginning(form));
  };

  return (
    <AnimatedLayout>
      <AuthContainer>
        <Card css={{ mw: "400px", mh: "400px" }}>
          <form onSubmit={handleSubmit(onSubmitLogin)}>
            <Card.Header className="card-header">
              <p className="title-card">Login</p>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "30px", px: "25px" }}>
              <Input
                placeholder="Email"
                label={<EmailIcon />}
                value="email"
                register={register}
                error={errors.email ? true : false}
              />
              {errors.email ? (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              ) : (
                <Spacer y={1.2} />
              )}
              <Input
                placeholder="Password"
                label={<LockIcon />}
                value="password"
                type={typePw}
                password
                onPassword={() => setTypePw(!typePw)}
                register={register}
                error={errors.password ? true : false}
              />
              {errors.password ? (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              ) : (
                <Spacer y={1.2} />
              )}
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
                <Button color="warning" width="100px" onClick={handleClearform}>
                  Clear
                </Button>
                <Spacer x={1} />
                <Button
                  color="success"
                  width="100px"
                  type="submit"
                  disabled={loading === true ? true : false}
                  onClick={() => trigger()}
                >
                  {loading === true ? <Loading color="white" /> : "Confirm"}
                </Button>
              </Row>
            </Card.Footer>
          </form>
        </Card>
      </AuthContainer>
    </AnimatedLayout>
  );
}

export default Login;
