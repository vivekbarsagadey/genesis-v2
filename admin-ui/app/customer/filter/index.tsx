<<<<<<< HEAD
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { IconButton } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import React, { useEffect, useState } from 'react';
import { isNotBlank } from '../../../utils/string.util';
import { ICustomer } from '../models';

const FilterStyle = styled(Grid)(({ theme }) => ({
  width: 300,
  padding: '1rem',
=======
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
import { ICustomer } from "../models";

const FilterStyle = styled(Grid)(({ theme }) => ({
  width: 300,
  padding: "1rem",
>>>>>>> dev
}));

interface CompanyFilterComponentProps {
  customer: Array<ICustomer>;
  onFilterHandler: (_: Array<ICustomer>) => void;
}
type FilterFields = {
  key: string;
  values: string[];
  label: string;
};

interface FilterProps {
  filterField: FilterFields;
<<<<<<< HEAD
  options: Array<string>;
}

function FilterComponent({
  customer,
  onFilterHandler,
}: CompanyFilterComponentProps) {
=======
  options: Array<String>;
}

const FilterComponent = ({
  customer,
  onFilterHandler,
}: CompanyFilterComponentProps) => {
>>>>>>> dev
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [fileds, setFileds] = useState<Array<FilterFields>>([]);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const emailFilter = (value: string) => (item: ICustomer) => {
<<<<<<< HEAD
    console.log('value ??', value);
=======
    console.log("value ??", value);
>>>>>>> dev

    if (isNotBlank(item.email)) {
      if (!item.email.toLowerCase().includes(value.toLowerCase())) {
        return false;
      }
      return true;
    }
    return true;
  };
  const nameFilter = (value: string) => (item: ICustomer) => {
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
<<<<<<< HEAD
    // const d = customer.filter(() => emailFilter(emailData[0]));

=======
    const d = customer.filter(() => emailFilter(emailData[0]));
   
>>>>>>> dev
    // onFilterHandler();
  };

  useEffect(() => {
<<<<<<< HEAD
    const filterFields = [];
    filterFields.push({ key: 'email', values: [], label: 'Email' });
    filterFields.push({ key: 'name', values: [], label: 'Name' });
=======
    var filterFields = [];
    filterFields.push({ key: "email", values: [], label: "Email" });
    filterFields.push({ key: "name", values: [], label: "Name" });
>>>>>>> dev
    setFileds(filterFields);
  }, []);

  return (
    <>
      <Tooltip title="Filter">
        <IconButton
          id="basic-button"
<<<<<<< HEAD
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
=======
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
>>>>>>> dev
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
<<<<<<< HEAD
          'aria-labelledby': 'basic-button',
        }}
      >
        {customer
          && fileds?.map((feild, index) => {
            const { key } = feild;
            return (
              <Filter
                filterField={feild}
                // options={Array.from(
                //   new Set(customer?.map((f) => f[`${key}`]))
                // )}
                options={['dummy']}
                key={index}
              />
=======
          "aria-labelledby": "basic-button",
        }}
      >
        {customer &&
          fileds?.map((feild, index) => {
            const key = feild.key;
            return (
              <Filter
                filterField={feild}
                options={Array.from(
                  new Set(customer?.map((f) => f[`${key}`]))
                )}
                key={index}
              ></Filter>
>>>>>>> dev
            );
          })}

        <Grid container mb={1} mt={2}>
<<<<<<< HEAD
          <Grid item xs={6} />
=======
          <Grid item xs={6}></Grid>
>>>>>>> dev
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
<<<<<<< HEAD
}

function Filter({ filterField, options }: FilterProps) {
  const filterUpdateHandler = (value: any) => {
=======
};

const Filter = ({ filterField, options }: FilterProps) => {
  const filterUpdateHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
>>>>>>> dev
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
<<<<<<< HEAD
                  type: 'search',
=======
                  type: "search",
>>>>>>> dev
                }}
                placeholder={filterField.label}
              />
            )}
          />
        </Stack>
      </FilterStyle>
    </Grid>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> dev

export default FilterComponent;
