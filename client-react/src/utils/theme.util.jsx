import { createTheme } from "@nextui-org/react";
import { color } from "themes/colors";

export const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: color.blue,
      success: color.green,
      error: color.redP,
      warning: color.orangeP,
      secondary: color.navi,
      light: color.white,
      dark: color.black,
    },
  },
});
