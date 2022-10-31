import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";
import React from "react";

const Products = () => {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add New
      </Button>
      <Button variant="outlined" disabled>
        outlined
      </Button>
      <Typography variant="h1" component="p">
        It uses h1 style but its a p tag
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Anothe Button</BlueButton>
    </div>
  );
};

export default Products;

//-------------------------------------------------------------------------------------
// <Button
//   variant="contained"
//   sx={{
//     backgroundColor: "skyblue",
//     color: "#888",
//     margin: 5,
//     "&:hover": {
//       backgroundColor: "lightblue",
//     },
//     "&:disabled": {
//       backgroundColor: "gray",
//       color: "white",
//     },
//   }}
// >
//   My unique Button
// </Button>;

//-------------------------------------------------------------------------------------
// const BlueButton = styled(Button)({
//   backgroundColor: "skyblue",
//   color: "#888",
//   margin: 5,
//   "&:hover": {
//     backgroundColor: "lightblue",
//   },
//   "&:disabled": {
//     backgroundColor: "gray",
//     color: "white",
//   },
// });

//-------------------------------------------------------------------------------------
// import { Button, styled, Typography } from "@mui/material";
// import { Add, Settings } from "@mui/icons-material";
// import React from "react";

// const Products = () => {
//   const BlueButton = styled(Button)(({ theme }) => ({
//     backgroundColor: "skyblue",
//     color: "#888",
//     margin: 5,
//     "&:hover": {
//       backgroundColor: "lightblue",
//     },
//     "&:disabled": {
//       backgroundColor: "gray",
//       color: "white",
//     },
//   }));

//   return (
//     <div>
//       <Button variant="text">Text</Button>
//       <Button
//         startIcon={<Settings />}
//         variant="contained"
//         color="secondary"
//         size="small"
//       >
//         Settings
//       </Button>
//       <Button
//         startIcon={<Add />}
//         variant="contained"
//         color="success"
//         size="small"
//       >
//         Add New
//       </Button>
//       <Button variant="outlined" disabled>
//         outlined
//       </Button>
//       <Typography variant="h1" component="p">
//         It uses h1 style but its a p tag
//       </Typography>
//       <BlueButton>My Button</BlueButton>
//       <BlueButton>Anothe Button</BlueButton>
//     </div>
//   );
// };

// export default Products;
