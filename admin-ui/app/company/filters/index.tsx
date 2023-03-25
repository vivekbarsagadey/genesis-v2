import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {ICompany} from "../models/company.model";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const FilterStyle = styled(Grid)(({ theme }) => ({
  width: 300,
  padding: "1rem", // this is worng
}));

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
}: // itemsCallBackHandler = () => {},
CompanyComponentProps) => {
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
    <Grid container spacing={2}>
      <Menu
        id="basic-menu"
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
    </Grid>
  );
};

export default CompanyFilterComponent;
