<<<<<<< HEAD
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { IconButton } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { ICompany } from '../models';
=======
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
>>>>>>> dev

const FilterStyle = styled(Grid)(() => ({
  width: 300,
  paddingTop: '1rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
}));

<<<<<<< HEAD
type CompanyFilterComponentProps = {
  companies: Array<ICompany>;
  onFilterHandler: any;
  itemsCallBackHandler: any;
};

function FilterComponent({
  companies,
  itemsCallBackHandler,
}: CompanyFilterComponentProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [filterDataCompanyName, setFilterDataName] = useState('');
  const [filterDataOwnerName, setFilterDataOwnerName] = useState('');
  const [filterDataEmail, setFilterDataEmail] = useState('');
  const open = Boolean(anchorEl);

  const doFilter = () => {
    const newCompanies = companies?.filter(
      (u) =>
        u.name.toLowerCase().includes(filterDataCompanyName.toLowerCase()) ||
        u.ownerName.toLowerCase().includes(filterDataOwnerName.toLowerCase()) ||
        u.email.toLowerCase().includes(filterDataEmail.toLowerCase())
    );
    itemsCallBackHandler(newCompanies);
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
=======
interface CompanyFilterComponentProps {
  companies: Array<ICompany>;
  onFilterHandler: (_: Array<ICompany>) => void;
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
  companies,
  onFilterHandler,
}: CompanyFilterComponentProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [fileds, setFileds] = useState<Array<FilterFields>>([]);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
>>>>>>> dev
  const handleClose = () => {
    setAnchorEl(null);
  };

  const emailFilter = (value: string) => (item: ICompany) => {
    console.log("value ??", value);

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
    const emailData = fileds.map((ele) => ele.values);
    const d = companies.filter(() => emailFilter(emailData[0]));
   
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
<<<<<<< HEAD
          id="filter-btn"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={{ background: 'transparent' }}
=======
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
>>>>>>> dev
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
          'aria-labelledby': 'basic-button',
        }}
      >
<<<<<<< HEAD
        <FilterStyle>
          <Stack>
            <Autocomplete
              freeSolo
              size="small"
              id="free-solo-2-demo"
              disableClearable
              options={Array.from(
                new Set(companies.map((data) => data.ownerName))
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Owner Name"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
              onChange={(event, value) => setFilterDataOwnerName(value)}
            />
          </Stack>
        </FilterStyle>

        <FilterStyle>
          <Stack>
            <Autocomplete
              freeSolo
              size="small"
              id="free-solo-2-demo"
              disableClearable
              options={Array.from(new Set(companies.map((data) => data.name)))}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Company Name"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
              onChange={(event, value) => setFilterDataName(value)}
            />
          </Stack>
        </FilterStyle>

        <FilterStyle>
          <Stack>
            <Autocomplete
              freeSolo
              size="small"
              id="free-solo-2-demo"
              disableClearable
              options={Array.from(new Set(companies.map((data) => data.email)))}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Email"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
              onChange={(event, value) => setFilterDataEmail(value)}
            />
          </Stack>
        </FilterStyle>
=======
        {companies &&
          fileds?.map((feild, index) => {
            const key = feild.key;
            return (
              <Filter
                filterField={feild}
                options={Array.from(
                  new Set(companies?.map((f) => f[`${key}`]))
                )}
                key={index}
              ></Filter>
            );
          })}
>>>>>>> dev

        <Grid container mb={1} mt={2}>
          <Grid item xs={6} />
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
<<<<<<< HEAD
            <Button variant="contained" size="small" onClick={doFilter}>
=======
            <Button variant="contained" size="small" onClick={applyFilter}>
>>>>>>> dev
              Save
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </>
<<<<<<< HEAD
=======
  );
};

const Filter = ({ filterField, options }: FilterProps) => {
  const filterUpdateHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
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
>>>>>>> dev
  );
}

export default FilterComponent;
