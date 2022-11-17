import EmailIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";
import UsernameIcon from "@mui/icons-material/PeopleAltOutlined";
import { Avatar, Card, Checkbox, Input, Row, Text } from "@nextui-org/react";
import Button from "components/common/button/Button";
import File from "components/common/file/File";
import Modal from "components/common/modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "utils/date.util";
import { ProfileContainer } from "./Profile.style";

function Profile() {
  //* Declare global variables

  //* Redux hooks
  const { user } = useSelector((state) => state.auth);

  //* Local state
  const [openModal, setOpenModal] = useState(false);
  const [fileName, setfileName] = useState("");
  //* Hooks

  //* Other

  //* Condition rendering

  const onChange = (e) => {
    console.log(e);
    setfileName(e.target.value);
  };
  return (
    <ProfileContainer>
      <Card css={{ mw: "420px", padding: "25px 40px" }}>
        <Card.Header className="center">
          <Avatar
            className="avatar"
            text={user?.name.charAt(0).toUpperCase()}
          />
        </Card.Header>
        <Card.Body>
          <p className="mb-10">
            <span className="title">ID</span>
            <span className="content">{user?._id}</span>
          </p>
          <p className="mb-10">
            <span className="title">Name</span>
            <span className="content">{user?.name}</span>
          </p>
          <p className="mb-10">
            <span className="title">Email</span>
            <span className="content">{user?.email}</span>
          </p>
          <p className="mb-10">
            <span className="title">Account</span>
            <span className="content">
              {user?.isAdmin === true ? "Admin" : "User"}
            </span>
          </p>
          <p>
            <span className="title">Created</span>
            <span className="content">
              {formatDate(user?.createdAt, "DD/MM/YYYY")}
            </span>
          </p>
        </Card.Body>
        <Card.Footer className="center">
          <Button
            color="warning"
            onClick={() => setOpenModal(true)}
          >Update</Button>
        </Card.Footer>
      </Card>

      {/* //!---------------- Modal section -------------------*/}
      <Modal
        open={openModal}
        header="Update information"
        submitBtn="Update"
        close={() => setOpenModal(false)}
      >
        <Input
          clearable
          bordered
          color="primary"
          size="lg"
          placeholder="Username"
          contentLeft={<UsernameIcon />}
        />
        <Input
          clearable
          bordered
          color="primary"
          size="lg"
          placeholder="Email"
          contentLeft={<EmailIcon />}
        />
        <Input.Password
          clearable
          bordered
          color="primary"
          size="lg"
          placeholder="Password"
          contentLeft={<LockIcon />}
        />
        <Input.Password
          clearable
          bordered
          color="primary"
          size="lg"
          placeholder="Confirm password"
          contentLeft={<LockIcon />}
        />
        <File onChange={onChange} name={fileName} fileTitle="Avatar" value="" />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
          <Text size={14}>Forgot password?</Text>
        </Row>
      </Modal>
    </ProfileContainer>
  );
}

export default Profile;
