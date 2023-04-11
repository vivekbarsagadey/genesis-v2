import { Box, Grid, Paper, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Case, Default, Switch } from "react-if";
import PieChart from "react-pie-graph-chart";

const CustomerGraphView = ({ customer }: ListComponentProps) => {
  const [graphView, setGraphView] = useState<string>("");
  let keys = Object.keys(customer[0]);
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
      value: customer?.filter((item) => item.country === "India")?.length,
      color: "#c026d3",
    },
    {
      type: "Australia",
      value: customer.filter((item) => item.country === "Australia").length,
      color: "#030712",
    },
    {
      type: "America",
      value: customer.filter((item) => item.country === "America").length,
      color: "#86198f",
    },
    {
      type: "Spain",
      value: customer.filter((item) => item.country === "Spain").length,
      color: "#4BA2DA",
    },
    {
      type: "US",
      value: customer.filter((item) => item.country === "US").length,
      color: "#F1AF13",
    },
    {
      type: "UK",
      value: customer.filter((item) => item.country === "UK").length,
      color: "#1d4ed8",
    },
    {
      type: "Dubai",
      value: customer.filter((item) => item.country === "Dubai").length,
      color: "#b91c1c",
    },
    {
      type: "Srilanka",
      value: customer.filter((item) => item.country === "Srilanka").length,
      color: "#1e1b4b",
    },
    {
      type: "Thailand",
      value: customer.filter((item) => item.country === "Thailand").length,
      color: "#4c0519",
    },
  ];
  const stateData = [
    {
      type: "Bihar",
      value: customer?.filter((item) => item.state === "Bihar")?.length,
      color: "#c026d3",
    },
    {
      type: "Madhya Pradesh",
      value: customer.filter((item) => item.state === "Madhya Pradesh").length,
      color: "#030712",
    },
    {
      type: "UP",
      value: customer.filter((item) => item.state === "UP").length,
      color: "#86198f",
    },
    {
      type: "Maharastra",
      value: customer.filter((item) => item.state === "Maharastra").length,
      color: "#4BA2DA",
    },
    {
      type: "Punjab",
      value: customer.filter((item) => item.state === "Punjab").length,
      color: "#F1AF13",
    },
    {
      type: "UK",
      value: customer.filter((item) => item.state === "UK").length,
      color: "#1d4ed8",
    },
    {
      type: "Gujrat",
      value: customer.filter((item) => item.state === "Gujrat").length,
      color: "#b91c1c",
    },
    {
      type: "Karnataka",
      value: customer.filter((item) => item.state === "Karnataka").length,
      color: "#fb923c",
    },
    {
      type: "Jammu & Kashmir",
      value: customer.filter((item) => item.state === "Jammu & Kashmir").length,
      color: "#4d7c0f",
    },
  ];
  const cityData = [
    {
      type: "Patna",
      value: customer?.filter((item) => item.city === "Patna")?.length,
      color: "#c026d3",
    },
    {
      type: "Mumbai",
      value: customer.filter((item) => item.city === "Mumbai").length,
      color: "#030712",
    },
    {
      type: "Pune",
      value: customer.filter((item) => item.city === "Pune").length,
      color: "#86198f",
    },
    {
      type: "Banglore",
      value: customer.filter((item) => item.city === "Banglore").length,
      color: "#4BA2DA",
    },

    {
      type: "Ahmedabad",
      value: customer.filter((item) => item.city === "Ahmedabad").length,
      color: "#1d4ed8",
    },
    {
      type: "Kolkata",
      value: customer.filter((item) => item.city === "Kolkata").length,
      color: "#b91c1c",
    },
    {
      type: "Rajasthan",
      value: customer.filter((item) => item.city === "Rajasthan").length,
      color: "#fb923c",
    },
    {
      type: "Hyderabad",
      value: customer.filter((item) => item.city === "Hyderabad").length,
      color: "#4d7c0f",
    },
    {
      type: "Lucknow",
      value: customer.filter((item) => item.city === "Lucknow").length,
      color: "#00f8e8",
    },
  ];

  const statusData = [
    {
      type: "ACTIVE",
      value: customer.filter((item) => item.status === "ACTIVE").length,
      color: "#0a9523",
    },
    {
      type: "INACTIVE",
      value: customer.filter((item) => item.status === "INACTIVE").length,
      color: "#f50a0a",
    },
  ];

  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={6}   style={{ background:'red'}} >
            {/* <Paper variant="outlined">
              <Typography>xs 6</Typography>
            </Paper> */}
            a
          </Grid>
          <Grid item xs={6}>
            <Paper variant="outlined">
              <Typography>xs 6</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <Grid container>
          <Grid item xs={12}>
            <Paper variant="outlined">
              <Typography>xs 12</Typography>
            </Paper>
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
