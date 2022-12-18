// Mui
import TextField, { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
// Mui icons
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

// porps
type SearchBoxProps = {
  onClear: () => void;
} & TextFieldProps;

// component
const SearchBox = ({
  value,
  label = "Search",
  variant = "standard",
  fullWidth = true,
  onChange,
  onClear,
  ...rest
}: SearchBoxProps) => {
  // icons
  const inputProps = {
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon color="primary" />
      </InputAdornment>
    ),
    endAdornment: (
      <InputAdornment position="end">
        {!!value && (
          <IconButton onClick={onClear}>
            <ClearIcon color="secondary" />
          </IconButton>
        )}
      </InputAdornment>
    ),
  };

  return (
    <TextField
      {...rest}
      label={label}
      value={value}
      variant={variant}
      onChange={onChange}
      InputProps={inputProps}
      fullWidth={fullWidth}
    />
  );
};

export default SearchBox;
