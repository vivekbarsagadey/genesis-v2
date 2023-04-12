import { Box, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import CompanyPieChart from "./pie.chart";
import { ListComponentProps } from "./props";

const CustomerGraphView = ({ companies }: ListComponentProps) => {
  const [graphView, setGraphView] = useState<string>("");
  const updateGrpahView = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setGraphView(value);
  };

  let keys = Object.keys(companies[0]);
  const graphTypeVal = keys.filter((element) => {
    if (
      element === "country" ||
      element === "state" ||
      element === "city" ||
      element === "status"
    ) {
      return true;
    }
    return false;
  });
  const statusData = [
    ["Status", "Users"],
    ["ACTIVE", companies.filter((item) => item.status === "ACTIVE").length],
    ["INACTIVE", companies.filter((item) => item.status === "INACTIVE").length],
  ];

  const stateData = [
    ["companies", "State"],
    ["Bihar", companies.filter((item) => item.state === "Bihar").length],
    [
      "Madhya Pradesh",
      companies.filter((item) => item.state === "Madhya Pradesh").length,
    ],
    ["UP", companies.filter((item) => item.state === "UP").length],
    [
      "Maharastra",
      companies.filter((item) => item.state === "Maharastra").length,
    ],
    ["Punjab", companies.filter((item) => item.state === "Punjab").length],
    ["UK", companies.filter((item) => item.state === "UK").length],
    ["Gujrat", companies.filter((item) => item.state === "Gujrat").length],
    [
      "Karnataka",
      companies.filter((item) => item.state === "Karnataka").length,
    ],
    [
      "Jammu & Kashmir",
      companies.filter((item) => item.state === "Jammu & Kashmir").length,
    ],
  ];
  const countryData = [
    ["companies", "Country"],
    ["India", companies.filter((item) => item.country === "India").length],
    [
      "Australia",
      companies.filter((item) => item.country === "Australia").length,
    ],
    ["America", companies.filter((item) => item.country === "America").length],
    ["Spain", companies.filter((item) => item.country === "Spain").length],
    ["US", companies.filter((item) => item.country === "US").length],
    ["UK", companies.filter((item) => item.country === "UK").length],
    ["Dubai", companies.filter((item) => item.country === "Dubai").length],
    [
      "Srilanka",
      companies.filter((item) => item.country === "Srilanka").length,
    ],
    [
      "Thailand",
      companies.filter((item) => item.country === "Thailand").length,
    ],
  ];

  return (
    <Box mr={2}>
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={9}>
              <CompanyPieChart
                stateData={stateData}
                graphView={graphView}
                statusData={statusData}
                countryData={countryData}
              />
            </Grid>
            <Grid item xs={3}>
              <Stack>
                <Autocomplete
                  value={graphView}
                  onChange={updateGrpahView}
                  freeSolo
                  id="customer-select-type"
                  disableClearable
                  size="small"
                  options={graphTypeVal?.map((option) => option)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                      placeholder="Select Graph View"
                    />
                  )}
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
};

export default CustomerGraphView;
