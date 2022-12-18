import { useState } from "react";
// Mui
import TextField, { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
// Mui icons
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

type SearchBoxProps = {
  onClear: () => void;
} & TextFieldProps;

const SearchBox = ({
  value,
  label = "Search",
  onChange,
  onClear,
}: SearchBoxProps) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {value === "" ? (
              <SearchIcon color="primary" />
            ) : (
              <IconButton onClick={onClear}>
                <ClearIcon color="secondary" />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

export default SearchBox;
