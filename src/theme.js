import { createTheme } from "@mui/material/styles";
import { green, purple, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    otherColor: {
      main: grey[600],
    },
  },
});
