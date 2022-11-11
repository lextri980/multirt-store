import { NextUIProvider } from "@nextui-org/react";
import { useRoutes } from "react-router-dom";
import { theme } from "utils/theme.utils";
import routes from "./routes/routes";
import "./themes/scss/App.scss";

function App() {
  const route = useRoutes(routes());
  return (
    <NextUIProvider theme={theme}>
      <div className="App">{route}</div>
    </NextUIProvider>
  );
}

export default App;
