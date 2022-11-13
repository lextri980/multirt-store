import React from "react";
import { Outlet } from "react-router";
import NavbarMenu from "../../common/navbar/Navbar";
import { DashboardLayoutContainer } from "./DashboardLayout.style";

function DashboardLayout() {
  return (
    <DashboardLayoutContainer>
      <NavbarMenu />
      <Outlet />
    </DashboardLayoutContainer>
  );
}

export default DashboardLayout;
