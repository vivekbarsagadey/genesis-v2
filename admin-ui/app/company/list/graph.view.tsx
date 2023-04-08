import { Box, Grid, Paper, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Case, Default, Switch } from "react-if";
import PieChart from "react-pie-graph-chart";
import { ListComponentProps } from "./props";

const CustomerGraphView = ({ companies }: ListComponentProps) => {
  const [graphView, setGraphView] = useState<string>("");
  let keys = Object.keys(companies[0]);
  const graphTypeVal = keys.filter((element) => {
    if (element === "country" || element === "state" || element === "status") {
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
  console.log("graphTypeVal >>>", graphTypeVal);

  const countryData = [
    {
      type: "India",
      value: companies?.filter((item) => item.country === "India")?.length,
      color: "#c026d3",
    },
    {
      type: "Australia",
      value: companies.filter((item) => item.country === "Australia").length,
      color: "#030712",
    },
    {
      type: "America",
      value: companies.filter((item) => item.country === "America").length,
      color: "#86198f",
    },
    {
      type: "Spain",
      value: companies.filter((item) => item.country === "Spain").length,
      color: "#4BA2DA",
    },
    {
      type: "US",
      value: companies.filter((item) => item.country === "US").length,
      color: "#F1AF13",
    },
    {
      type: "UK",
      value: companies.filter((item) => item.country === "UK").length,
      color: "#1d4ed8",
    },
    {
      type: "Dubai",
      value: companies.filter((item) => item.country === "Dubai").length,
      color: "#b91c1c",
    },
    {
      type: "Srilanka",
      value: companies.filter((item) => item.country === "Srilanka").length,
      color: "#1e1b4b",
    },
    {
      type: "Thailand",
      value: companies.filter((item) => item.country === "Thailand").length,
      color: "#4c0519",
    },
  ];
  const stateData = [
    {
      type: "Bihar",
      value: companies?.filter((item) => item.state === "Bihar")?.length,
      color: "#c026d3",
    },
    {
      type: "Madhya Pradesh",
      value: companies.filter((item) => item.state === "Madhya Pradesh").length,
      color: "#030712",
    },
    {
      type: "UP",
      value: companies.filter((item) => item.state === "UP").length,
      color: "#86198f",
    },
    {
      type: "Maharastra",
      value: companies.filter((item) => item.state === "Maharastra").length,
      color: "#4BA2DA",
    },
    {
      type: "Punjab",
      value: companies.filter((item) => item.state === "Punjab").length,
      color: "#F1AF13",
    },
    {
      type: "UK",
      value: companies.filter((item) => item.state === "UK").length,
      color: "#1d4ed8",
    },
    {
      type: "Gujrat",
      value: companies.filter((item) => item.state === "Gujrat").length,
      color: "#b91c1c",
    },
    {
      type: "Karnataka",
      value: companies.filter((item) => item.state === "Karnataka").length,
      color: "#fb923c",
    },
    {
      type: "Jammu & Kashmir",
      value: companies.filter((item) => item.state === "Jammu & Kashmir")
        .length,
      color: "#4d7c0f",
    },
  ];

  const statusData = [
    {
      type: "NEW",
      value: companies.filter((item) => item.status === "ACTIVE").length,
      color: "#3730a3",
    },
    {
      type: "ACTIVE",
      value: companies.filter((item) => item.status === "ACTIVE").length,
      color: "#0a9523",
    },
    {
      type: "INACTIVE",
      value: companies.filter((item) => item.status === "INACTIVE").length,
      color: "#f50a0a",
    },
  ];

  return (
    <Box mr={2}>
      <Paper variant="outlined" style={{ height: "83vh" }}>
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
      </Paper>
    </Box>
  );
};

const CountryChart = ({ countryData }) => {
  return <PieChart data={countryData} />;
};
const StateChart = ({ stateData }) => {
  return <PieChart data={stateData} />;
};

export default CustomerGraphView;
