import EmailIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import UsernameIcon from "@mui/icons-material/PeopleAltOutlined";
import { Avatar, Card, Input, Spacer } from "@nextui-org/react";
import clsx from "clsx";
import Button from "components/common/button/Button";
import File from "components/common/file/File";
import Loading from "components/common/loading/Loading";
import Modal from "components/common/modal/Modal";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettingProfile } from "store/actions/profile.action";
import { formatDate } from "utils/date.util";
import { ProfileContainer } from "./Profile.style";

function Profile() {
  //* Redux hooks
  const { profile, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  //* Declare global variables
  const [form, setForm] = useState({
    name: "",
    email: "",
    oldPassword: "",
    password: "",
    confirmPassword: "",
    avatar: null,
  });

  const { name, email, oldPassword, password, confirmPassword, avatar } = form;

  //* Local state
  const [openUpdateProfileModal, setOpenUpdateProfileModal] = useState(false);
  const [openUpdateAvatarModal, setOpenUpdateAvatarModal] = useState(false);
  const [openUpdatePasswordModal, setOpenUpdatePasswordModal] = useState(false);
  const [fileName, setFileName] = useState("");

  //* Hooks
  useEffect(() => {
    dispatch(gettingProfile());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (profile) {
      setForm({
        name: profile.name,
        email: profile.email,
      });
    }
  }, [profile, name, email]);

  //* Other

  //* Condition rendering

  //@ (handleClearForm): clear form
  const handleClearForm = () => {
    setForm({
      name: "",
      email: "",
      oldPassword: "",
      password: "",
      confirmPassword: "",
      avatar: null,
    });
    setFileName("");
  };

  //@ (handleChangeForm): handle event change form
  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //@ (handleChangeForm): handle event change form
  const handleChangeAvatar = (e) => {
    setFileName(e.target.value);
    setForm({
      avatar: e.target.value,
    });
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
        <Card css={{ mw: "420px", padding: "25px 40px", margin: "0 90px" }}>
          <Card.Header className="center">
            <Avatar
              className="avatar"
              text={profile?.name.charAt(0).toUpperCase()}
            />
          </Card.Header>
          <Card.Body>
            {loading === true ? (
              <Loading color="primary" type="gradient" size="lg" />
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
                <p
                  className={clsx({
                    "mb-10": profile?.createdAt !== profile?.updatedAt,
                  })}
                >
                  <span className="title">Created</span>
                  <span className="content">
                    {formatDate(profile?.createdAt, "DD/MM/YYYY")}
                  </span>
                </p>
                {profile?.createdAt === profile?.updatedAt ? (
                  ""
                ) : (
                  <p>
                    <span className="title">Updated</span>
                    <span className="content">
                      {formatDate(profile?.updatedAt, "DD/MM/YYYY")}
                    </span>
                  </p>
                )}
              </>
            )}
          </Card.Body>
          <Card.Footer className="center">
            <Button
              color="warning"
              width="320px"
              onClick={() => {
                setOpenUpdateProfileModal(true);
                handleClearForm();
              }}
            >
              Update profile
            </Button>
            <Spacer x={1} />
            <div className="horizontal-center">
              <Button
                color="success"
                width="150px"
                onClick={() => {
                  setOpenUpdateAvatarModal(true);
                  handleClearForm();
                }}
              >
                Change avatar
              </Button>
              <Spacer x={1} />
              <Button
                color="danger"
                width="150px"
                onClick={() => {
                  setOpenUpdatePasswordModal(true);
                  handleClearForm();
                }}
              >
                Change password
              </Button>
            </div>
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
        {/* Modal update profile ------------------------------- */}
        <Modal
          open={openUpdateProfileModal}
          header="Update profile"
          submitBtn="Update"
          close={() => setOpenUpdateProfileModal(false)}
        >
          <Input
            clearable
            bordered
            color="primary"
            size="lg"
            placeholder="Name"
            contentLeft={<UsernameIcon />}
            name="name"
            value={name}
            onChange={handleChangeForm}
          />
          <Input
            clearable
            bordered
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<EmailIcon />}
            name="email"
            value={email}
            onChange={handleChangeForm}
          />
        </Modal>

        {/* Modal update avatar ------------------------------- */}
        <Modal
          open={openUpdateAvatarModal}
          header="Change avatar"
          submitBtn="Update"
          close={() => setOpenUpdateAvatarModal(false)}
        >
          <div className="horizontal-center">
            <Avatar
              size={"xl"}
              text={profile?.name.charAt(0).toUpperCase()}
              css={{ size: "$20" }}
            />
          </div>
          <File
            value={avatar}
            onChange={handleChangeAvatar}
            name={fileName}
            fileTitle="Choose avatar"
            onClear={handleClearForm}
          />
        </Modal>

        {/* Modal update password ------------------------------- */}
        <Modal
          open={openUpdatePasswordModal}
          header="Change password"
          submitBtn="Update"
          close={() => setOpenUpdatePasswordModal(false)}
        >
          <Input
            clearable
            bordered
            color="primary"
            size="lg"
            placeholder="Old password"
            contentLeft={<LockIcon />}
            name="oldPassword"
            value={oldPassword}
            onChange={handleChangeForm}
          />
          <Input
            clearable
            bordered
            color="primary"
            size="lg"
            placeholder="New password"
            contentLeft={<LockIcon />}
            name="password"
            value={password}
            onChange={handleChangeForm}
          />
          <Input
            clearable
            bordered
            color="primary"
            size="lg"
            placeholder="Confirm new password"
            contentLeft={<LockResetOutlinedIcon />}
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeForm}
          />
        </Modal>
      </ProfileContainer>
    </AnimatedLayout>
  );
}

export default Profile;
