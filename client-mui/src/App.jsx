import { ConfigProvider } from "antd";
import SetAuthContextProvider from "contexts/setAuth.context";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { color } from "themes/colors";
import routes from "./routes/routes";
import "./themes/scss/App.scss";

function App() {
  const route = useRoutes(routes());
  return (
    // <ErrorBoundary>
    <SetAuthContextProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: color.blue,
            colorSuccess: color.green,
            colorWarning: color.orangeP,
            colorDanger: color.redP,
          },
        }}
      >
        <ToastContainer theme="colored" pauseOnFocusLoss={true} />
        <div className="App">{route}</div>
      </ConfigProvider>
    </SetAuthContextProvider>
    // </ErrorBoundary>
  );
}

export default App;
