import Account from "@mui/icons-material/AccountCircleOutlined";
import AnchorIcon from "@mui/icons-material/Anchor";
import Moon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import Sun from "@mui/icons-material/WbSunnyOutlined";
import {
  Badge,
  Dropdown,
  Input,
  Navbar,
  Switch,
  Text,
  Spacer,
  Tooltip,
} from "@nextui-org/react";
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { NavbarContainer } from "./Navbar.style";

function NavbarMenu() {
  const [switchChecked, setSwitchChecked] = useState(true);
  const handleChangeSwitch = () => {
    setSwitchChecked(!switchChecked);
    console.log(switchChecked);
  };

  return (
    <NavbarContainer switchChecked={switchChecked}>
      <Navbar isBordered className="dark-theme">
        <Navbar.Brand>
          <span className="logo-web">
            <AnchorIcon />
          </span>
          <Text b color="inherit" hideIn="xs">
            MULTIRT STORE
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Input
            className="search-input"
            clearable
            bordered
            contentRightStyling={false}
            placeholder="Search..."
            contentLeft={<SearchIcon className="search-icon" />}
          />
        </Navbar.Content>
        <Navbar.Content>
          <Badge size="sm" content="1" className="badge-cart">
            <ShoppingCart className="icon-clickable" />
          </Badge>
          <Switch
            checked={switchChecked}
            size="md"
            shadow
            iconOn={<Sun />}
            iconOff={<Moon />}
            className={clsx({
              "switch-theme-light": switchChecked === true,
              "switch-theme-dark": switchChecked === false,
            })}
            aria-label="switch"
            onChange={handleChangeSwitch}
          />
          <Tooltip
            content="You do not have an account? Click here to create an account."
            placement="bottom"
            color='invert'
          >
            <Link to="/authentication" className="link-redirect login-link">
              <Account style={{ marginRight: "5px" }} />
              Login
            </Link>
          </Tooltip>
        </Navbar.Content>
      </Navbar>
      <div className="secondary-menu">
        <Dropdown>
          <Dropdown.Button>Menu</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item key="new">New file</Dropdown.Item>
            <Dropdown.Item key="copy">Copy link</Dropdown.Item>
            <Dropdown.Item key="edit">Edit file</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Spacer x={2} />
        <Button name="ABC" className="ml-20" color="success" />
        <Spacer x={2} />
        <Button name="ABC" className="ml-20" color="success" />
        <Spacer x={2} />
        <Button name="ABC" className="ml-20" color="success" />
        <Spacer x={2} />
        <Button name="ABC" className="ml-20" color="success" />
      </div>
    </NavbarContainer>
  );
}

export default NavbarMenu;
