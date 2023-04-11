import { Box, Grid, Paper, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Case, Default, Switch } from "react-if";
import { Chart } from "react-google-charts";
import moment from 'moment'


const options = {
  vAxis: { title: "Customer Created" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { type: "line" },
};

const CustomerGraphView = ({ customer }: ListComponentProps) => {
  const [graphView, setGraphView] = useState<string>("");

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

  const statusData = [
    ["Status", "Users"],
    ["ACTIVE", customer.filter((item) => item.status === "ACTIVE").length],
    ["INACTIVE", customer.filter((item) => item.status === "INACTIVE").length],
  ];
  const genderData = [
    ["Customer", "Gender"],
    ["MALE", customer.filter((item) => item.gender === "Male").length],
    ["FEMALE", customer.filter((item) => item.gender === "Female").length],
  ];
  const stateData = [
    ["Customer", "State"],
    ["Bihar", customer.filter((item) => item.state === "Bihar").length],
    [
      "Madhya Pradesh",
      customer.filter((item) => item.state === "Madhya Pradesh").length,
    ],
    ["UP", customer.filter((item) => item.state === "UP").length],
    [
      "Maharastra",
      customer.filter((item) => item.state === "Maharastra").length,
    ],
    ["Punjab", customer.filter((item) => item.state === "Punjab").length],
    ["UK", customer.filter((item) => item.state === "UK").length],
    ["Gujrat", customer.filter((item) => item.state === "Gujrat").length],
    ["Karnataka", customer.filter((item) => item.state === "Karnataka").length],
    [
      "Jammu & Kashmir",
      customer.filter((item) => item.state === "Jammu & Kashmir").length,
    ],
  ];
  const countryData = [
    ["Customer", "Country"],
    ["India", customer.filter((item) => item.country === "India").length],
    [
      "Australia",
      customer.filter((item) => item.country === "Australia").length,
    ],
    ["America", customer.filter((item) => item.country === "America").length],
    ["Spain", customer.filter((item) => item.country === "Spain").length],
    ["US", customer.filter((item) => item.country === "US").length],
    ["UK", customer.filter((item) => item.country === "UK").length],
    ["Dubai", customer.filter((item) => item.country === "Dubai").length],
    ["Srilanka", customer.filter((item) => item.country === "Srilanka").length],
    ["Thailand", customer.filter((item) => item.country === "Thailand").length],
  ];
  const cityData = [
    ["Customer", "City"],
    ["Patna", customer.filter((item) => item.city === "Patna").length],
    ["Mumbai", customer.filter((item) => item.city === "Mumbai").length],
    ["Pune", customer.filter((item) => item.city === "Pune").length],
    ["Banglore", customer.filter((item) => item.city === "Banglore").length],
    ["Ahmedabad", customer.filter((item) => item.city === "Ahmedabad").length],
    ["Kolkata", customer.filter((item) => item.city === "Kolkata").length],
    ["Rajasthan", customer.filter((item) => item.city === "Rajasthan").length],
    ["Hyderabad", customer.filter((item) => item.city === "Hyderabad").length],
    ["Lucknow", customer.filter((item) => item.city === "Lucknow").length],
  ];

  console.log(
    "customer >>",
    customer.map((ele) => moment(ele.updatedAt).format("MMM"))
  );
 

  const CompariosnCountryData = [
    ["Country", "ACTIVE", "INACTIVE"],
    [
      "India",
      customer
        .filter((ele) => ele.country === "India")
        .filter((ele) => ele.status === "ACTIVE").length,
      customer
        .filter((ele) => ele.country === "India")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "Australia",
      customer
        .filter((ele) => ele.country === "Australia")
        .filter((ele) => ele.status === "ACTIVE").length,
      customer
        .filter((ele) => ele.country === "Australia")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "America",
      customer
        .filter((ele) => ele.country === "America")
        .filter((ele) => ele.status === "ACTIVE").length,
      customer
        .filter((ele) => ele.country === "America")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "Spain",
      customer
        .filter((ele) => ele.country === "Spain")
        .filter((ele) => ele.status === "ACTIVE").length,
      customer
        .filter((ele) => ele.country === "Spain")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "US",
      customer
        .filter((ele) => ele.country === "US")
        .filter((ele) => ele.status === "ACTIVE").length,
      customer
        .filter((ele) => ele.country === "US")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "UK",
      customer
        .filter((ele) => ele.country === "UK")
        .filter((ele) => ele.status === "ACTIVE").length,
      customer
        .filter((ele) => ele.country === "UK")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "Dubai",
      customer
        .filter((ele) => ele.country === "Dubai")
        .filter((ele) => ele.status === "ACTIVE").length,
      customer
        .filter((ele) => ele.country === "Dubai")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "Srilanka",
      customer
        .filter((ele) => ele.country === "Srilanka")
        .filter((ele) => ele.status === "ACTIVE").length,
      customer
        .filter((ele) => ele.country === "Srilanka")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "Thailand",
      customer
        .filter((ele) => ele.country === "Thailand")
        .filter((ele) => ele.status === "ACTIVE").length,
      customer
        .filter((ele) => ele.country === "Thailand")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
  ];

  const createdDataData = [
    ["Month", "Count"],
    ["JAN", customer.map((ele) => moment(ele.updatedAt).format("MMM")).filter(  (d)=> d === "Jan" ).length     ],
    ["FEB", customer.map((ele) => moment(ele.updatedAt).format("MMM")).filter(  (d)=> d === "Feb" ).length],
    ["MAR", customer.map((ele) => moment(ele.updatedAt).format("MMM")).filter(  (d)=> d === "Mar" ).length],
    ["APR", customer.map((ele) => moment(ele.updatedAt).format("MMM")).filter(  (d)=> d === "Apr" ).length],
    ["MAY", customer.map((ele) => moment(ele.updatedAt).format("MMM")).filter(  (d)=> d === "May" ).length],
    ["JUN", customer.map((ele) => moment(ele.updatedAt).format("MMM")).filter(  (d)=> d === "Jun" ).length],
    ["JUL", customer.map((ele) => moment(ele.updatedAt).format("MMM")).filter(  (d)=> d === "Jul" ).length],
    ["AUG", customer.map((ele) => moment(ele.updatedAt).format("MMM")).filter(  (d)=> d === "Aug" ).length],
    ["SEP", customer.map((ele) => moment(ele.updatedAt).format("MMM")).filter(  (d)=> d === "Sep" ).length],
    ["OCT", customer.map((ele) => moment(ele.updatedAt).format("MMM")).filter(  (d)=> d === "Oct" ).length],
    ["NOV", customer.map((ele) => moment(ele.updatedAt).format("MMM")).filter(  (d)=> d === "Nov" ).length],
    ["DEC", customer.map((ele) => moment(ele.updatedAt).format("MMM")).filter(  (d)=> d === "Dec" ).length],
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
                  data={cityData}
                  width={"100%"}
                  height={"320px"}
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
            <>
              <Chart
                chartType="ComboChart"
                width="100%"
                height="400px"
                data={createdDataData}
                options={options}
              />

           
            </>
          </Grid>
          <Grid item xs={12}>
            <>
              <Chart
                chartType="Bar"
                width="100%"
                height="300px"
                data={CompariosnCountryData}
              />
            </>
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
