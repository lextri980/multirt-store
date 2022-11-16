import React from "react";
import { NotFoundContainer } from "./NotFound.style";
import errorImg from "assets/img/error404.gif";
import Button from "components/common/button/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <img src={errorImg} alt="error" />
      <div className="detail-404">
        <p>Do you enter right url?</p>
        <Button
          width="190px"
          name="Back to Dashboard"
          elementFront={<DashboardIcon />}
          onClick={() => navigate("/dashboard")}
        />
      </div>
    </NotFoundContainer>
  );
}

export default NotFound;
