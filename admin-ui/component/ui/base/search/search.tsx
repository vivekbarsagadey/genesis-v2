"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { InputProps } from "../input";
import { ButtonStyles } from "../button/button.style";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  ...ButtonStyles,
  button: {
    ...ButtonStyles.button,
  },
});

const SearchComponent = ({ placeHolder, type }: InputProps) => {
  const [searchValue, setSearchValue] = useState("");
  const onChangeHandller = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };
  return (
    <>
      <TextField
        size="small"
        type={type}
        placeholder={placeHolder}
        onChange={onChangeHandller}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </>
  );
};

export { SearchComponent };
