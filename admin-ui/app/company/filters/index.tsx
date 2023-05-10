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
import { any } from 'prop-types';

const FilterStyle = styled(Grid)(() => ({
  width: 300,
  paddingTop: '1rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
}));

type CompanyFilterComponentProps = {
  companies: Array<ICompany>;
  onFilterHandler: (Array<ICompany>) => void: any;
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
      (u) => u.name.toLowerCase().includes(filterDataCompanyName.toLowerCase())
      || u.ownerName.toLowerCase().includes(filterDataOwnerName.toLowerCase())
      || u.email.toLowerCase().includes(filterDataEmail.toLowerCase()),
    );
    itemsCallBackHandler(newCompanies);
    // eslint-disable-next-line no-use-before-define
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log('companiesCompanies', companies);

  return (
    <>
      <Tooltip title="Filter">
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
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
          'aria-labelledby': 'basic-button',
        }}
      >
        <FilterStyle>
          <Stack>
            <Autocomplete
              freeSolo
              size="small"
              id="free-solo-2-demo"
              disableClearable
              options={Array.from(
                new Set(companies.map((data) => data.ownerName)),
              )}
              renderInput={(params) => (
                <TextField
                  // eslint-disable-next-line react/jsx-props-no-spreading
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
                  // eslint-disable-next-line react/jsx-props-no-spreading
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
                  // eslint-disable-next-line react/jsx-props-no-spreading
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
            <Button variant="contained" size="small" onClick={doFilter}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </>
  );
}

export default FilterComponent;
