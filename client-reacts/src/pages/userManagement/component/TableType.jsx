import { Avatar, Badge, Spacer, Table } from "@nextui-org/react";
import {
  DeleteIcon,
  DetailIcon,
  UpdateIcon,
} from "components/common/icon/Icon";
import Loading from "components/common/loading/Loading";
// import Table from "components/common/table/Table";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";
import { useSelector } from "react-redux";
import { color } from "themes/colors";
import { formatDate } from "utils/date.util";
import { TableTypeContainer } from "./TableType.style";

function TableType() {
  //* Redux hooks
  const { users, loading } = useSelector((state) => state.user);

  //* Declare global variables
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

  //* Local state

  //* Hooks

  //* Other

  //* Condition rendering
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
        return (
          <div className="horizontal-center">
            <DetailIcon color={color.blue} />
            <Spacer x={0.8} />
            <UpdateIcon color={color.orangeP} />
            <Spacer x={0.8} />
            <DeleteIcon color={color.redP} />
          </div>
        );

      default:
        return cellValue;
    }
  };

  return (
    <AnimatedLayout>
      <TableTypeContainer>
        <Table
          aria-label="Table render"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
          className="table-container"
          bordered
          color="primary"
          hoverable
          sticked
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.key}
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
                <Table.Row key={item._id}>
                  {(columnKey) => (
                    <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                  )}
                </Table.Row>
              )
            }
          </Table.Body>
        </Table>
      </TableTypeContainer>
    </AnimatedLayout>
  );
}

export default TableType;
