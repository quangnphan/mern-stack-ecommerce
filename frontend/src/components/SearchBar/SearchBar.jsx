import React, { useState } from "react";
import { TextField,InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const inputWidth = focused ? 270 : 200;
  const inputStyle = {
    width: inputWidth + 'px',
    transition: 'width 0.2s ease-in-out', // Add a smooth transition effect
};

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
            endAdornment: (
            <InputAdornment position="end">
              <SearchIcon onClick={handleSearch} style={{ cursor: 'pointer' }} />
            </InputAdornment>
          ),
          style: inputStyle,
        }}
      />
    </div>
  );
};

export default SearchBar;
