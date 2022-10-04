import React from "react";
import { categories } from "../../Utilities/Constants";
import { Stack } from "@mui/material";

const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button>
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
