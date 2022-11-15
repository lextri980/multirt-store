import { useEffect } from "react";
import { useSelector } from "react-redux";
import { titlePage } from "utils/titlePage.util";
import { DashboardContainer } from "./Dashboard.style";

function Dashboard() {
  titlePage("Multirt | Dashboard");
  //* Declare global variables

  //* Redux hooks
  const { loading } = useSelector((state) => state.auth);

  //* Local state

  //* Hooks
  useEffect(() => {
    console.log(loading)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  //* Other

  return (
    <DashboardContainer>
      <p>Dashboard</p>
      <p>{loading}</p>
    </DashboardContainer>
  );
}

export default Dashboard;
