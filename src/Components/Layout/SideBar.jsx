import React from "react";
import { categories } from "../../Utilities/Constants";
import { Stack } from "@mui/material";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
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
        // tabs title change handler
        const onChangeTabsHandler = () => {
          setSelectedCategory(category.name);
        };

        return (
          <button
            onClick={onChangeTabsHandler}
            className="category-btn"
            style={{
              background: category.name === selectedCategory && "#fc1503",
              color: "#fff",
            }}
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : 0.8,
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
