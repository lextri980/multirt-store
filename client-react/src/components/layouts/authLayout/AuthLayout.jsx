import NavbarAuth from "components/common/navbar/NavbarAuth";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthLayoutContainer } from "./AuthLayout.style";

function AuthLayout() {
  const [isActive, setIsActive] = useState(true);

  return (
    <AuthLayoutContainer>
      <NavbarAuth isActive={isActive} setIsActive={setIsActive} />
      <Outlet context={[isActive]} />
    </AuthLayoutContainer>
  );
}

export default AuthLayout;
