import { Avatar, Badge, Card, Spacer, Text, Tooltip } from "@nextui-org/react";
import { DeleteIcon, UpdateIcon } from "components/common/icon/Icon";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";
import { useSelector } from "react-redux";
import { color } from "themes/colors";
import { formatDate } from "utils/date.util";
import { CardTypeContainer } from "./CardType.style";
import Skeleton from "@mui/material/Skeleton";
import { Stack } from "@mui/material";
import Loading from "components/common/loading/Loading";

function CardType() {
  //* Redux hooks
  const { users, loading } = useSelector((state) => state.user);

  //* Declare global variables

  //* Local state

  //* Hooks

  //* Other

  //! Condition rendering ----------------------------------------------------
  let cardBody;
  if (loading === true) {
    cardBody = (
      <Card className="card-user center" isHoverable>
        <Loading size="lg" type="gradient" />
      </Card>
    );
  } else {
    cardBody = users.map((item, index) => (
      <Card className="card-user" isHoverable>
        <Card.Header className="card-header-user">
          <Text b>{item.name}</Text>
          <div className="card-header-action-btn flex">
            <UpdateIcon size="22px" color={color.orangeP} />
            <Spacer x={0.3} />
            <DeleteIcon size="22px" color={color.redP} />
          </div>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          <div className="card-body-user-info">
            <Avatar
              text={item?.name.charAt(0).toUpperCase()}
              size="lg"
              src={item?.avatar?.path}
            />
            <Spacer x={0.5} />
            <Tooltip color="invert" placement="bottom" content={item.email}>
              <span className="fs-14 overflow">Email: {item.email}</span>
            </Tooltip>
          </div>
          <Spacer y={0.7} />
          <Badge color={item.isAdmin === true ? "warning" : "success"}>
            {item.isAdmin === true ? "Admin" : "User"}
          </Badge>
          <Spacer y={0.5} />
          <span className="fs-14 ml-5">
            Created at: {formatDate(item.createdAt, "DD/MM/YYYY HH:mm")}
          </span>
          <Spacer y={0.3} />
          <span className="fs-14 ml-5">
            Updated at: {formatDate(item.updatedAt, "DD/MM/YYYY HH:mm")}
          </span>
        </Card.Body>
      </Card>
    ));
  }

  //! Return section ---------------------------------------------------------
  return (
    <AnimatedLayout>
      <CardTypeContainer>{cardBody}</CardTypeContainer>
    </AnimatedLayout>
  );
}

export default CardType;
