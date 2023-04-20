import UpdateIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DetailIcon from "@mui/icons-material/DocumentScannerOutlined";
import { Avatar, Badge, Spacer, Table } from "@nextui-org/react";
import Loading from "components/common/loading/Loading";
import Modal from "components/common/modal/Modal";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";
import { useState } from "react";
import { useSelector } from "react-redux";
import { color } from "themes/colors";
import { formatDate } from "utils/function.util";
import { TableTypeContainer } from "./TableType.style";

function TableType() {
  //* Redux hooks --------------------------------------------------------------------------------------------
  const { users, loading } = useSelector((state) => state.user);

  //* Declare global variables -------------------------------------------------------------------------------
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const columns = [
    {
      key: "info",
      label: "Infomation",
      width: "500px",
    },
    {
      key: "account",
      label: "Account",
      width: "100px",
    },
    {
      key: "createdAt",
      label: "Created at",
      width: "200px",
    },
    {
      key: "updatedAt",
      label: "Updated at",
      width: "200px",
    },
    {
      key: "action",
      label: "Action",
      width: "300px",
    },
  ];

  //* Local state --------------------------------------------------------------------------------------------
  const [userDetailModal, setUserDetailModal] = useState(false);
  const [userUpdatelModal, setUserUpdatelModal] = useState(false);
  const [userDeleteModal, setUserDeleteModal] = useState(false);
  const [userChosen, setUserChosen] = useState({});

  //* Form and validate --------------------------------------------------------------------------------------
  //* Hooks --------------------------------------------------------------------------------------------------
  //* Effects ------------------------------------------------------------------------------------------------
  //* Other --------------------------------------------------------------------------------------------------

  //@ (openUserModal):  -------------------------------------------------------
  const openUserModal = (type, data) => {
    setUserChosen(data);
    if (type === "detail") {
      setUserDetailModal(true);
    } else if (type === "update") {
      setUserUpdatelModal(true);
    } else {
      setUserDeleteModal(true);
    }
  };

  //! Condition rendering --------------------------------------------------------------------------------------------------
  const renderCell = (data, columnKey) => {
    const cellValue = data[columnKey];
    switch (columnKey) {
      case "info":
        return (
          <div className="flex align-center">
            <Avatar
              text={data?.name.charAt(0).toUpperCase()}
              size="lg"
              src={data?.avatar?.path}
            />
            <Spacer x={0.7} />
            <div className="flex-column align-start">
              <b>{data.name}</b>
              <p>{data.email}</p>
            </div>
          </div>
        );

      case "account":
        return (
          <div className="flex">
            <Badge
              color={data.isAdmin === true ? "warning" : "success"}
              css={{ minWidth: "60px" }}
            >
              {data.isAdmin === true ? "Admin" : "User"}
            </Badge>
          </div>
        );

      case "createdAt":
        return (
          <div className="flex">{formatDate(data.createdAt, "DD/MM/YYYY")}</div>
        );

      case "updatedAt":
        return (
          <div className="flex">{formatDate(data.updatedAt, "DD/MM/YYYY")}</div>
        );

      case "action":
        if (userLocal._id === data._id) {
          return (
            <Badge color="success" css={{ minWidth: "60px" }}>
              Current User
            </Badge>
          );
        } else {
          return (
            <div className="horizontal-center">
              <DetailIcon
                className="pointer"
                style={{ color: color.blue }}
                onClick={() => openUserModal("detail", data)}
              />
              <Spacer x={0.8} />
              <UpdateIcon
                className="pointer"
                style={{ color: color.orangeP }}
                onClick={() => openUserModal("update", data)}
              />
              <Spacer x={0.8} />
              <DeleteIcon
                className="pointer"
                style={{ color: color.redP }}
                onClick={() => openUserModal("delete", data)}
              />
            </div>
          );
        }

      default:
        return cellValue;
    }
  };

  //!! Return section ------------------------------------------------------------------------------------------------------
  return (
    <AnimatedLayout>
      <TableTypeContainer>
        {/* //* -------------------------------------- Table: User list ---------------------------------------------- */}
        <Table
          aria-label="Table render"
          className="table-container"
          bordered
          color="primary"
          hoverable
          fixed
          lined
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column?.key}
                align={column.key === "action" ? "center" : "start"}
                css={{
                  fontSize: "15px",
                  height: "50px",
                  width: column.width || "",
                }}
              >
                {column.label}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={users}>
            {(item) =>
              loading === true ? (
                <Table.Row>
                  <Loading />
                </Table.Row>
              ) : (
                <Table.Row key={item?._id}>
                  {(columnKey) => (
                    <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                  )}
                </Table.Row>
              )
            }
          </Table.Body>
        </Table>

        {/* //! -------------------------------------- Modal section ---------------------------------------------- */}
        {/* //* Modal: User detail ---------------------------------------------- */}
        <Modal
          open={userDetailModal}
          header="User Detail"
          close={() => setUserDetailModal(false)}
        >
          {userChosen.name}
        </Modal>

        {/* //* Modal: User update ---------------------------------------------- */}
        <Modal
          open={userUpdatelModal}
          header="Update User"
          close={() => setUserUpdatelModal(false)}
        ></Modal>

        {/* //* Modal: User delete ---------------------------------------------- */}
        <Modal
          open={userDeleteModal}
          header="Delete User"
          close={() => setUserDeleteModal(false)}
        ></Modal>
      </TableTypeContainer>
    </AnimatedLayout>
  );
}

export default TableType;
