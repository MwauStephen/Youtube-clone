import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "../../Utilities/Constants";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        background: "#000",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" height={45} />
      </Link>
    </Stack>
  );
};

export default NavBar;
