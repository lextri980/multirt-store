import { useState } from "react";
import { Outlet } from "react-router";
import NavbarMenu from "../../common/navbar/Navbar";
import AnimatedNavLayout from "../animatedLayout/AnimatedNavLayout";
import { DashboardLayoutContainer } from "./DashboardLayout.style";

function DashboardLayout() {
  const [switchLayout, setSwitchLayout] = useState(true);
  return (
    <AnimatedNavLayout>
      <DashboardLayoutContainer>
        <NavbarMenu
          switchLayout={switchLayout}
          setSwitchLayout={setSwitchLayout}
        />
        <Outlet context={[switchLayout]} />
      </DashboardLayoutContainer>
    </AnimatedNavLayout>
  );
}

export default DashboardLayout;
