import { LOCALSTORAGE_TOKEN_NAME } from "constants/service.const";
import { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "store/actions/auth.action";

export const SetAuthContext = createContext();

function SetAuthContextProvider({ children }) {
  const dispatch = useDispatch();

  const setAuthLogin = () => {
    if (localStorage[LOCALSTORAGE_TOKEN_NAME]) {
      const userData = JSON.parse(localStorage.getItem("user"));
      dispatch(setAuth(userData));
    }
  };

  useEffect(() => {
    setAuthLogin();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SetAuthContextData = {};

  return (
    <SetAuthContext.Provider value={SetAuthContextData}>
      {children}
    </SetAuthContext.Provider>
  );
}

export default SetAuthContextProvider;
