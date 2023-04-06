import Account from "@mui/icons-material/AccountCircleOutlined";
import AnchorIcon from "@mui/icons-material/Anchor";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CardIcon from "@mui/icons-material/CreditCardOutlined";
import Moon from "@mui/icons-material/DarkModeOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import TableIcon from "@mui/icons-material/TableViewOutlined";
import Sun from "@mui/icons-material/WbSunnyOutlined";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Avatar,
  Badge,
  Dropdown,
  Input,
  Navbar,
  Spacer,
  Switch,
  Text,
  Tooltip,
} from "@nextui-org/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { logoutRequest } from "store/actions/auth.action";
import { gettingProfile } from "store/actions/profile.action";
import { color } from "themes/colors";
import Button from "../button/Button";
import ButtonLight from "../button/ButtonLight";
import Loading from "../loading/Loading";
import { NavbarContainer } from "./Navbar.style";

function NavbarMenu({ switchLayout, setSwitchLayout }) {
  //* Redux hooks
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { profile, loading } = useSelector((state) => state.profile);

  //* Local state
  const [switchChecked, setSwitchChecked] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const open = Boolean(openDropdown);

  //* Hooks
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(gettingProfile());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //@ (handleChangeSwitch): change color for switch
  const handleChangeSwitch = () => {
    setSwitchChecked(!switchChecked);
  };

  const handleChangeLayoutSwitch = (e) => {
    setSwitchLayout(!switchLayout);
  };

  //! async (onSubmitLogout):  handle logout
  const onSubmitLogout = () => {
    dispatch(logoutRequest());
  };

  //* Condition rendering
  let topLoginBtn;
  if (isAuthenticated === false) {
    topLoginBtn = (
      <Tooltip
        content="You do not have an account? Click here to create an account."
        placement="bottom"
        color="invert"
      >
        <Link to="/authentication" className="link-redirect login-link">
          <Account style={{ marginRight: "5px" }} />
          Login
        </Link>
      </Tooltip>
    );
  } else {
    topLoginBtn = (
      <>
        <Avatar
          style={{ marginRight: "-20px" }}
          text={profile?.name.charAt(0).toUpperCase()}
          src={profile?.avatar?.path}
        />
        <ButtonLight
          element={<ArrowDropDownIcon />}
          onClick={(e) => setOpenDropdown(e.currentTarget)}
        >
          {loading === true ? <Loading type="gradient" /> : profile?.name}
          <ArrowDropDownIcon />
        </ButtonLight>
        <Menu
          id="basic-menu"
          anchorEl={openDropdown}
          open={open}
          PaperProps={{
            style: {
              width: 200,
            },
          }}
          onClose={() => setOpenDropdown(null)}
        >
          {location.pathname !== "/dashboard" ? (
            <MenuItem
              onClick={() => {
                navigate("/dashboard");
                setOpenDropdown(null);
              }}
            >
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: "15px" }}>
                Dashboard
              </ListItemText>
            </MenuItem>
          ) : (
            ""
          )}
          <MenuItem
            onClick={() => {
              navigate("/profile");
              setOpenDropdown(null);
            }}
          >
            <ListItemIcon>
              <AssignmentIndIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ fontSize: "15px" }}>
              Profile
            </ListItemText>
          </MenuItem>
          {user.isAdmin === true ? (
            <MenuItem
              onClick={() => {
                navigate("/manage-user");
                setOpenDropdown(null);
              }}
            >
              <ListItemIcon>
                <PeopleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: "15px" }}>
                Manage user
              </ListItemText>
            </MenuItem>
          ) : (
            ""
          )}
          <Divider />
          <MenuItem onClick={onSubmitLogout}>
            <ListItemIcon sx={{ color: color.redP }}>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              sx={{ color: color.redP }}
              primaryTypographyProps={{ fontSize: "15px" }}
            >
              Logout
            </ListItemText>
          </MenuItem>
        </Menu>
      </>
    );
  }

  //!! Return section ---------------------------------
  return (
    <NavbarContainer>
      <Navbar isBordered className="dark-theme">
        <Navbar.Brand
          onClick={() => navigate("/dashboard")}
          style={{ cursor: "pointer", minWidth: "300px" }}
        >
          <span className="logo-web">
            <AnchorIcon />
          </span>
          <Text b color="inherit" hideIn="xs">
            MULTIRT STORE
          </Text>
          <Spacer x={1}></Spacer>
          {user ? (
            <Badge
              size="md"
              color={user.isAdmin === true ? "warning" : "success"}
            >
              {user.isAdmin === true ? "Admin account" : "User account"}
            </Badge>
          ) : (
            ""
          )}
        </Navbar.Brand>
        {/* //! Middle menu navbar ----------------------------------- */}
        <Navbar.Content>
          {location.pathname === "/profile" ? (
            <Tooltip
              content="Click to go to dashboard"
              placement="bottom"
              color="invert"
            >
              <div
                className="title-profile"
                onClick={() => navigate("/dashboard")}
              >
                <SupervisedUserCircleOutlinedIcon />
                <h4>Your profile</h4>
              </div>
            </Tooltip>
          ) : location.pathname === "/manage-user" ? (
            <div className="switch-layout-user">
              <p>Table</p>
              <Switch
                checked={switchLayout}
                size="lg"
                shadow
                iconOn={<CardIcon />}
                iconOff={<TableIcon />}
                className={clsx({
                  "switch-theme-card": switchLayout === true,
                  "switch-theme-table": switchLayout === false,
                })}
                aria-label="switch"
                onChange={handleChangeLayoutSwitch}
              />
              <p>Card</p>
            </div>
          ) : (
            <Input
              className="search-input"
              clearable
              bordered
              color="primary"
              contentRightStyling={false}
              placeholder="Search..."
              contentLeft={<SearchIcon className="search-icon" />}
            />
          )}
        </Navbar.Content>
        {/* //! Right menu navbar ----------------------------------- */}
        <Navbar.Content style={{ cursor: "pointer", minWidth: "300px" }}>
          <Badge size="sm" content="1" color="error">
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
          {/* //* Group btn login checking authen */}
          {topLoginBtn}
        </Navbar.Content>
      </Navbar>
      {/* //! Secondary menu navbar ----------------------------------- */}
      {location.pathname !== "/profile" &&
      location.pathname !== "/manage-user" ? (
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
          <Button name="ABC" className="ml-20" color="success">
            ABC
          </Button>

          <Spacer x={2} />
          <Button name="ABC" className="ml-20" color="success">
            ABC
          </Button>
          <Spacer x={2} />
          <Button name="ABC" className="ml-20" color="success">
            ABC
          </Button>

          <Spacer x={2} />
          <Button name="ABC" className="ml-20" color="success">
            ABC
          </Button>
        </div>
      ) : (
        ""
      )}
    </NavbarContainer>
  );
}

export default NavbarMenu;
