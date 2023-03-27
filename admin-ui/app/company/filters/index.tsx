import React, { useState } from "react";
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

const FilterStyle = styled(Grid)(({ theme }) => ({
  width: 300,
  padding: "1rem",
}));

interface CompanyFilterComponentProps {
  companies: Array<ICompany>;
}

const FilterComponent = ({ companies }: CompanyFilterComponentProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [filterDataName, setFilterDataName] = useState<Array<string>>([]);
  const [filterDataEmail, setFilterDataEmail] = useState<String>();

  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string[]
  ) => {
    setFilterDataName(value);
  };
  const handleChangeEmail = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setFilterDataEmail(value);
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
        <Grid item xs={8}>
          <FilterStyle>
            <Stack>
              <Autocomplete
                size="small"
                onChange={handleChangeName}
                freeSolo
                options={Array.from(new Set(companies?.map((f) => f.name)))}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Company Name"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Stack>
          </FilterStyle>
        </Grid>
        <Grid item xs={8}>
          <FilterStyle>
            <Stack>
              <Autocomplete
                size="small"
                onChange={handleChangeEmail}
                freeSolo
                options={Array.from(new Set(companies.map((id) => id.email)))}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Email"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Stack>
          </FilterStyle>
        </Grid>

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
            <Button
              variant="contained"
              size="small"
              // onClick={doFilter}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </>
  );
};

export default FilterComponent;
