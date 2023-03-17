import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ICompany from "../company.model";

type CompanyComponentProps = {
  handleClose: () => void;
  companyData: Array<ICompany>;
  open: boolean;
  anchorEl: boolean;
  companySearchList: any;
  itemsCallBackHandler: any;
};

const CompanyFilterComponent = ({
  companyData,
  anchorEl,
  open,
  handleClose,
  itemsCallBackHandler = () => {},
}: CompanyComponentProps) => {
  const [filterDataName, setFilterDataName] = useState("");
  const [filterDataEmail, setFilterDataEmail] = useState("");

  const doFilter = () => {
    const companyFilterData = companyData?.filter(
      (u) =>
        u.firstName.toLowerCase().includes(filterDataName.toLowerCase()) ||
        u.email.toLowerCase().includes(filterDataEmail.toLowerCase())
    );
    itemsCallBackHandler(companyFilterData);
    handleClose();
  };

  return (
    <Grid container spacing={2}>
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
          <Stack sx={{ width: 300, padding: "1rem" }}>
            <Autocomplete
              size="small"
              freeSolo
              disableClearable
              options={Array.from(new Set(companyData?.map((f) => f.name)))}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Name"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
              onChange={(event, value) => setFilterDataName(value)}
            />
          </Stack>
        </Grid>
        <Grid item xs={8}>
          
          <Stack sx={{ width: 300, padding: "1rem" }}>
            <Autocomplete
              size="small"
              freeSolo
              disableClearable
              options={Array.from(new Set(companyData.map((id) => id.email)))}
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
              onChange={(event, value) => setFilterDataEmail(value)}
            />
          </Stack>
        </Grid>

        <Grid container mb={1} mt={2}>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              size="small"
              style={{ textTransform: "capitalize" }}
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              size="small"
              style={{ textTransform: "capitalize" }}
              onClick={doFilter}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </Grid>
  );
};

export default CompanyFilterComponent;
