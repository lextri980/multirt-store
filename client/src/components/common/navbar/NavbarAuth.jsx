import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { NavbarAuthContainer } from "./NavbarAuth.style";
import { Link } from "react-router-dom";
import AnimatedNavLayout from "components/layouts/animatedLayout/AnimatedNavLayout";

function NavbarAuth({ current, setCurrent }) {
  const items = [
    {
      label: "Login",
      key: "login",
      icon: <LoginOutlined />,
    },
    {
      label: "Register",
      key: "register",
      icon: <UserAddOutlined />,
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <AnimatedNavLayout>
      <NavbarAuthContainer>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{width: '100%', display: 'flex', justifyContent: 'center'}}
        />
      </NavbarAuthContainer>
    </AnimatedNavLayout>
  );
}

export default NavbarAuth;
