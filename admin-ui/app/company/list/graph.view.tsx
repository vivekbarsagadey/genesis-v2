import { Box, Grid, Paper, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Case, Default, Switch } from "react-if";
import PieChart from "react-pie-graph-chart";
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
      {/* <Paper variant="outlined" style={{ height: "83vh" }}>
        <Grid container mt={2}>
          <Grid item xs={2.8} ml={0.5}>
            <Stack>
              <Autocomplete
                value={graphView}
                onChange={updateGrpahView}
                freeSolo
                id="companies-select-type"
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
          <Grid item xs={5}>
            <Typography fontSize={"1.1rem"} mt={2} textAlign={"center"}>
              {graphView.toUpperCase()} GRAPH
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Case condition={graphView === "country"}>
                <CountryChart countryData={countryData} />
              </Case>
              <Case condition={graphView === "state"}>
                <StateChart stateData={stateData} />
              </Case>

              <Default>
                <PieChart data={statusData} />
              </Default>
            </Switch>
          </Grid>
        </Grid>
      </Paper> */}
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

// const CountryChart = ({ countryData }) => {
//   return <PieChart data={countryData} />;
// };
// const StateChart = ({ stateData }) => {
//   return <PieChart data={stateData} />;
// };

export default CustomerGraphView;
