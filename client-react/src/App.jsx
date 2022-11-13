import { NextUIProvider } from "@nextui-org/react";
import SetAuthContextProvider from "contexts/setAuth.context";
import { useRoutes } from "react-router-dom";
import { theme } from "utils/theme.util";
import routes from "./routes/routes";
import "./themes/scss/App.scss";

function App() {
  const route = useRoutes(routes());
  return (
    <SetAuthContextProvider>
      <NextUIProvider theme={theme}>
        <div className="App">{route}</div>
      </NextUIProvider>
    </SetAuthContextProvider>
  );
}

export default App;
