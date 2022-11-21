import React from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

const CustomTextField = () => {
  const StyledTextField = styled(TextField)`
    & 
  `;

  return <TextField></TextField>;
};

export default CustomTextField;
