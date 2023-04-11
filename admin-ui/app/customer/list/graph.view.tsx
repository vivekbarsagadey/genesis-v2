import { Box, Grid, Paper, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Case, Default, Switch } from "react-if";
import { Chart } from "react-google-charts";

export const options = {
  is3D: true,
};

const CustomerGraphView = ({ customer }: ListComponentProps) => {
  const [graphView, setGraphView] = useState<string>("");
  console.log("customer >>", customer);

  let keys = Object.keys(customer[0]);
  const graphTypeVal = keys.filter((element) => {
    if (
      element === "country" ||
      element === "state" ||
      element === "city" ||
      element === "status" ||
      element === "gender"
    ) {
      return true;
    }
    return false;
  });
  const updateGrpahView = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setGraphView(value);
  };

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const statusData = [
    ["Status", "Users"],
    ["ACTIVE", customer.filter((item) => item.status === "ACTIVE").length],
    ["INACTIVE", customer.filter((item) => item.status === "INACTIVE").length],
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <Chart
                  chartType="PieChart"
                  data={statusData}
                  width={"100%"}
                  height={"320px"}
                  options={options}
                />
              </Grid>
              <Grid item xs={3} mt={2}>
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
          <Grid item xs={6}>
            <>xs=4</>
          </Grid>
          <Grid item xs={12}>
            <>xs=4</>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

// const CountryChart = ({ countryData }) => {
//   return <PieChart data={countryData} />;
// };
// const StateChart = ({ stateData }) => {
//   return <PieChart data={stateData} />;
// };
// const CityChart = ({ cityData }) => {
//   return <PieChart data={cityData} />;
// };

export default CustomerGraphView;
