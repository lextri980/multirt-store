import NavbarAuth from "components/common/navbar/NavbarAuth";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AnimatedNavLayout from "../animatedLayout/AnimatedNavLayout";
import { AuthLayoutContainer } from "./AuthLayout.style";

function AuthLayout() {
  const [current, setCurrent] = useState("login");

  return (
    <AnimatedNavLayout>
      <AuthLayoutContainer>
        <NavbarAuth current={current} setCurrent={setCurrent} />
        <Outlet context={[current]} />
      </AuthLayoutContainer>
    </AnimatedNavLayout>
  );
}

export default AuthLayout;
