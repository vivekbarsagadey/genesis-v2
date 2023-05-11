import React, { useState } from 'react';
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
import { IProjects } from '../models';

const FilterStyle = styled(Grid)(() => ({
  width: 300,
  paddingTop: '1rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
}));

type CompanyFilterComponentProps = {
  projects: Array<IProjects>;
  onFilterHandler: any;
  itemsCallBackHandler: any;
};

function FilterComponent({
  projects,
  itemsCallBackHandler,
}: CompanyFilterComponentProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [filterDataProjectName, setFilterDataName] = useState('');
  const [filterDataCustomerName, setFilterDataCustomerName] = useState('');
  const open = Boolean(anchorEl);

  const doFilter = () => {
    const newProjects = projects?.filter(
      (u) =>
        u.name.toLowerCase().includes(filterDataProjectName.toLowerCase()) ||
        u.customerName.toLowerCase().includes(filterDataCustomerName.toLowerCase())
    );
    itemsCallBackHandler(newProjects);
    // eslint-disable-next-line no-use-before-define
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log('companiesCompanies', projects);

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
                new Set(projects.map((data) => data.customerName))
              )}
              renderInput={(params) => (
                <TextField
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...params}
                  placeholder="Customer Name"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
              onChange={(event, value) => setFilterDataCustomerName(value)}
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
              options={Array.from(new Set(projects.map((data) => data.name)))}
              renderInput={(params) => (
                <TextField
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...params}
                  placeholder="Project Name"
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
