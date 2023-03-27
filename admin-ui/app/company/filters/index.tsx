import React, { useState, useEffect } from "react";
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
import { ICompany } from "../models";
import { isNotBlank } from "../../../utils/string.util";

const FilterStyle = styled(Grid)(({ theme }) => ({
  width: 300,
  padding: "1rem",
}));

interface CompanyFilterComponentProps {
  companies: Array<ICompany>;
  onFilterHandler: (_: Array<ICompany>) => void;
}
type FilterFields = {
  key: string;
  values: string[];
  label: string;
};

const FilterComponent = ({
  companies,
  onFilterHandler,
}: CompanyFilterComponentProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [fileds, setFileds] = useState<Array<FilterFields>>([]);
  const [companyEmail, setCompanyEmail] = useState<string>("");

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const emailFilter = (value: string) => (item: ICompany) => {
    console.log("value 5>>", value);

    if (isNotBlank(item.email)) {
      if (!item.email.toLowerCase().includes(value.toLowerCase())) {
        return false;
      }
      return true;
    }
    return true;
  };
  const nameFilter = (value: string) => (item: ICompany) => {
    if (isNotBlank(item.name)) {
      if (!item.name.toLowerCase().includes(value.toLowerCase())) {
        return false;
      }
      return true;
    }
    return true;
  };

  const applyFilter = () => {
    onFilterHandler(companies.filter(() => emailFilter(companyEmail)));
  };

  useEffect(() => {
    var filterFields = [];
    filterFields.push({ key: "email", values: [], label: "Email" });
    filterFields.push({ key: "name", values: [], label: "Name" });
    setFileds(filterFields);
  }, [companies]);

  const filterUpdateHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setCompanyEmail(value);
  };

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
        {fileds.map((feild, index) => {
          return (
            <Grid item xs={8} key={index}>
              <FilterStyle>
                <Stack>
                  <Autocomplete
                    size="small"
                    onChange={filterUpdateHandler}
                    freeSolo
                    options={Array.from(new Set(companies?.map((f) => f.name)))}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                        placeholder={feild.label}
                      />
                    )}
                  />
                </Stack>
              </FilterStyle>
            </Grid>
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

export default FilterComponent;
