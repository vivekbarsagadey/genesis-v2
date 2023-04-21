import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { IconButton } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import React, { useEffect, useState } from "react";
import { isNotBlank } from "../../../utils/string.util";
import { IUser } from "../models";
const FilterStyle = styled(Grid)(({ theme }) => ({
  width: 300,
  padding: "1rem",
}));
interface CompanyFilterComponentProps {
  user: Array<IUser>;
  onFilterHandler: (_: Array<IUser>) => void;
}
type FilterFields = {
  key: string;
  values: string[];
  label: string;
};
interface FilterProps {
  filterField: FilterFields;
  options: Array<String>;
}
const FilterComponent = ({
  user,
  onFilterHandler,
}: CompanyFilterComponentProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [fileds, setFileds] = useState<Array<FilterFields>>([]);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const emailFilter = (value: string) => (item: IUser) => {
    console.log("value ??", value);
    if (isNotBlank(item.email)) {
      if (!item.email.toLowerCase().includes(value.toLowerCase())) {
        return false;
      }
      return true;
    }
    return true;
  };
  const nameFilter = (value: string) => (item: IUser) => {
    if (isNotBlank(item.name)) {
      if (!item.name.toLowerCase().includes(value.toLowerCase())) {
        return false;
      }
      return true;
    }
    return true;
  };
  const applyFilter = () => {
    const emailData = fileds.map((ele) => ele.values);
    // const d = user.filter(() => emailFilter(emailData[0]));
    // onFilterHandler();
  };
  useEffect(() => {
    var filterFields = [];
    filterFields.push({ key: "email", values: [], label: "Email" });
    filterFields.push({ key: "name", values: [], label: "Name" });
    setFileds(filterFields);
  }, []);
  return (
    <>
      <Tooltip title="Filter">
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <FilterAltIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {user &&
          fileds?.map((feild, index) => {
            const key = feild.key;
            return (
              <Filter
                filterField={feild}
                // options={Array.from(
                //   new Set(user?.map((f) => f[`${key}`]))
                // )}
                options={["dummy"]}
                key={index}
              ></Filter>
            );
          })}
        <Grid container mb={1} mt={2}>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              size="small"
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" size="small" onClick={applyFilter}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </>
  );
};
const Filter = ({ filterField, options }: FilterProps) => {
  const filterUpdateHandler = (
    
    value: any
  ) => {
    filterField.values.push(value);
  };
  return (
    <Grid item xs={8}>
      <FilterStyle>
        <Stack>
          <Autocomplete
            size="small"
            onChange={filterUpdateHandler}
            freeSolo
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                placeholder={filterField.label}
              />
            )}
          />
        </Stack>
      </FilterStyle>
    </Grid>
  );
};
export default FilterComponent;
