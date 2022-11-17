import EmailIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";
import UsernameIcon from "@mui/icons-material/PeopleAltOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import {
  Avatar,
  Card,
  Checkbox,
  Input,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import Button from "components/common/button/Button";
import File from "components/common/file/File";
import Loading from "components/common/loading/Loading";
import Modal from "components/common/modal/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettingProfile } from "store/actions/profile.action";
import { formatDate } from "utils/date.util";
import { ProfileContainer } from "./Profile.style";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";

function Profile() {
  //* Declare global variables

  //* Redux hooks
  const { profile, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  //* Local state
  const [openModal, setOpenModal] = useState(false);
  const [fileName, setfileName] = useState("");

  //* Hooks
  useEffect(() => {
    dispatch(gettingProfile());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //* Other

  //* Condition rendering

  const onChange = (e) => {
    console.log(e);
    setfileName(e.target.value);
  };
  return (
    <AnimatedLayout>
      <ProfileContainer>
        {/* //*------------------------------- Card 1 -------------------------------*/}
        <Card css={{ mw: "420px", padding: "25px 40px" }}>
          <div className="horizontal-center">
            <p>Comming soon</p>
            <Spacer x={0.5}></Spacer>
            <Loading color="primary" />
          </div>
        </Card>

        {/* //*------------------------------- Card 2 -------------------------------*/}
        <Card css={{ mw: "420px", padding: "25px 40px", margin: '0 90px' }}>
          <Card.Header className="center">
            <Avatar
              className="avatar"
              text={profile?.name.charAt(0).toUpperCase()}
            />
          </Card.Header>
          <Card.Body>
            {loading === true ? (
              <Loading color='primary' type="gradient" size="lg" />
            ) : (
              <>
                <p className="mb-10">
                  <span className="title">ID</span>
                  <span className="content">{profile?._id}</span>
                </p>
                <p className="mb-10">
                  <span className="title">Name</span>
                  <span className="content">{profile?.name}</span>
                </p>
                <p className="mb-10">
                  <span className="title">Email</span>
                  <span className="content">{profile?.email}</span>
                </p>
                <p className="mb-10">
                  <span className="title">Account</span>
                  <span className="content">
                    {profile?.isAdmin === true ? "Admin" : "User"}
                  </span>
                </p>
                <p>
                  <span className="title">Created</span>
                  <span className="content">
                    {formatDate(profile?.createdAt, "DD/MM/YYYY")}
                  </span>
                </p>
              </>
            )}
          </Card.Body>
          <Card.Footer className="center">
            <Button color="warning" onClick={() => setOpenModal(true)}>
              Update
            </Button>
          </Card.Footer>
        </Card>

        {/* //*------------------------------- Card 3 -------------------------------*/}
        <Card css={{ mw: "420px", padding: "25px 40px" }}>
          <div className="horizontal-center">
            <p>Comming soon</p>
            <Spacer x={0.5}></Spacer>
            <Loading color="primary" />
          </div>
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
            contentLeft={<LockResetOutlinedIcon />}
          />
          <File
            onChange={onChange}
            name={fileName}
            fileTitle="Avatar"
            value=""
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal>
      </ProfileContainer>
    </AnimatedLayout>
  );
}

export default Profile;
