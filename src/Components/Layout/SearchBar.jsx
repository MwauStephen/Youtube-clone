import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmitHandler = () => {};
  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  return (
    <Paper
      component="form"
      onSubmit={onSubmitHandler}
      sx={{
        borderRadius: 20,
        pl: 2,
        boxShadow: "none",
        border: "1px solid #e3e3e3",
        mr: { sm: 5 },
      }}
    >
      <input
        onChange={onChangeHandler}
        className="search-bar"
        placeholder="search...."
      />
      <IconButton type="submit" sx={{ color: "red", p: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
