import { Box, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import moment from "moment";
import React, { useState } from "react";
import { Chart } from "react-google-charts";
import UserPieChart from "./pie.chart";
import { ListComponentProps } from "./props";
const options = {
  vAxis: { title: "User Created" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { type: "line" },
};
const comparisonGraphDataVal = [
  { id: 1, label: "Active" },
  { id: 2, label: "Inactive" },
  { id: 3, label: "Male" },
  { id: 4, label: "Female" },
];
const UserGraphView = ({ user }: ListComponentProps) => {
  const [graphView, setGraphView] = useState<string>("");
  const [graphBase, setGrpahBase] = useState<string>("");
  const [graph1, setGrpah1] = useState<string>("");
  const [graph2, setGraph2] = useState<string>("");
  let keys = Object.keys(user[0]);
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
  const graphTypeBaseVal = keys.filter((element) => {
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
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setGraphView(value);
  };
  const statusData = [
    ["Status", "Users"],
    ["ACTIVE", user.filter((item) => item.status === "ACTIVE").length],
    ["INACTIVE", user.filter((item) => item.status === "INACTIVE").length],
  ];
  const stateData = [
    ["user", "State"],
    ["Bihar", user.filter((item) => item.state === "Bihar").length],
    [
      "Madhya Pradesh",
      user.filter((item) => item.state === "Madhya Pradesh").length,
    ],
    ["UP", user.filter((item) => item.state === "UP").length],
    [
      "Maharastra",
      user.filter((item) => item.state === "Maharastra").length,
    ],
    ["Punjab", user.filter((item) => item.state === "Punjab").length],
    ["UK", user.filter((item) => item.state === "UK").length],
    ["Gujrat", user.filter((item) => item.state === "Gujrat").length],
    ["Karnataka", user.filter((item) => item.state === "Karnataka").length],
    [
      "Jammu & Kashmir",
      user.filter((item) => item.state === "Jammu & Kashmir").length,
    ],
  ];
  const countryData = [
    ["user", "Country"],
    ["India", user.filter((item) => item.country === "India").length],
    [
      "Australia",
      user.filter((item) => item.country === "Australia").length,
    ],
    ["America", user.filter((item) => item.country === "America").length],
    ["Spain", user.filter((item) => item.country === "Spain").length],
    ["US", user.filter((item) => item.country === "US").length],
    ["UK", user.filter((item) => item.country === "UK").length],
    ["Dubai", user.filter((item) => item.country === "Dubai").length],
    ["Srilanka", user.filter((item) => item.country === "Srilanka").length],
    ["Thailand", user.filter((item) => item.country === "Thailand").length],
  ];
  const cityData = [
    ["user", "City"],
    ["Patna", user.filter((item) => item.city === "Patna").length],
    ["Mumbai", user.filter((item) => item.city === "Mumbai").length],
    ["Pune", user.filter((item) => item.city === "Pune").length],
    ["Banglore", user.filter((item) => item.city === "Banglore").length],
    ["Ahmedabad", user.filter((item) => item.city === "Ahmedabad").length],
    ["Kolkata", user.filter((item) => item.city === "Kolkata").length],
    ["Rajasthan", user.filter((item) => item.city === "Rajasthan").length],
    ["Hyderabad", user.filter((item) => item.city === "Hyderabad").length],
    ["Lucknow", user.filter((item) => item.city === "Lucknow").length],
  ];
  const createdDataData = [
    ["Month", "Count"],
    [
      "JAN",
      user
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Jan").length,
    ],
    [
      "FEB",
      user
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Feb").length,
    ],
    [
      "MAR",
      user
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Mar").length,
    ],
    [
      "APR",
      user
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Apr").length,
    ],
    [
      "MAY",
      user
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "May").length,
    ],
    [
      "JUN",
      user
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Jun").length,
    ],
    [
      "JUL",
      user
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Jul").length,
    ],
    [
      "AUG",
      user
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Aug").length,
    ],
    [
      "SEP",
      user
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Sep").length,
    ],
    [
      "OCT",
      user
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Oct").length,
    ],
    [
      "NOV",
      user
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Nov").length,
    ],
    [
      "DEC",
      user
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Dec").length,
    ],
  ];
  //Base Value
  const updateGraphBase = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setGrpahBase(value);
  };
  // First graph value
  const updateFirstGraph = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setGrpah1(value);
  };
  const updateSecondGraph = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setGraph2(value);
  };
  console.log("1-2-3", graphBase, graph1, graph2);
  const CompariosnCountryData = [
    ["Country", "ACTIVE", "INACTIVE"],
    [
      "India",
      user
        .filter((ele) => ele.country === "India")
        .filter((ele) => ele.status === "ACTIVE").length,
        user
        .filter((ele) => ele.country === "India")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "Australia",
      user
        .filter((ele) => ele.country === "Australia")
        .filter((ele) => ele.status === "ACTIVE").length,
        user
        .filter((ele) => ele.country === "Australia")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "America",
      user
        .filter((ele) => ele.country === "America")
        .filter((ele) => ele.status === "ACTIVE").length,
        user
        .filter((ele) => ele.country === "America")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "Spain",
      user
        .filter((ele) => ele.country === "Spain")
        .filter((ele) => ele.status === "ACTIVE").length,
        user
        .filter((ele) => ele.country === "Spain")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "US",
      user
        .filter((ele) => ele.country === "US")
        .filter((ele) => ele.status === "ACTIVE").length,
        user
        .filter((ele) => ele.country === "US")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "UK",
      user
        .filter((ele) => ele.country === "UK")
        .filter((ele) => ele.status === "ACTIVE").length,
        user
        .filter((ele) => ele.country === "UK")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "Dubai",
      user
        .filter((ele) => ele.country === "Dubai")
        .filter((ele) => ele.status === "ACTIVE").length,
        user
        .filter((ele) => ele.country === "Dubai")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "Srilanka",
      user
        .filter((ele) => ele.country === "Srilanka")
        .filter((ele) => ele.status === "ACTIVE").length,
        user
        .filter((ele) => ele.country === "Srilanka")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
    [
      "Thailand",
      user
        .filter((ele) => ele.country === "Thailand")
        .filter((ele) => ele.status === "ACTIVE").length,
        user
        .filter((ele) => ele.country === "Thailand")
        .filter((ele) => ele.status === "INACTIVE").length,
    ],
  ];
  const CompariosnData = [[graphBase, graph1, graph2]];
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <UserPieChart
                  stateData={stateData}
                  cityData={cityData}
                  graphView={graphView}
                  statusData={statusData}
                  countryData={countryData}
                />
              </Grid>
              <Grid item xs={3} mt={2}>
                <Stack>
                  <Autocomplete
                    value={graphView}
                    onChange={updateGrpahView}
                    freeSolo
                    id="user-select-type"
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
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Stack>
                  <Autocomplete
                    value={graphBase}
                    onChange={updateGraphBase}
                    freeSolo
                    id="graph-base"
                    disableClearable
                    size="small"
                    options={graphTypeBaseVal?.map((option) => option)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                        placeholder="Select Base"
                      />
                    )}
                  />
                </Stack>
              </Grid>
              {/* MAPPED 2 Dropdowns -> ask vivek sir  */}
              {/* {comparisonGraphDataVal.map((data, index) => {
                return <ComparisonGraphComponent key={index} index={index}  data={data}  callBackGraph={callBackGraph} />;
              })} */}
              {/* second  */}
              <Grid item xs={3}>
                <Stack>
                  <Autocomplete
                    value={graph1}
                    onChange={updateFirstGraph}
                    freeSolo
                    id="graph-1"
                    disableClearable
                    size="small"
                    options={comparisonGraphDataVal?.map(
                      (option) => option.label
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                        placeholder="Select Graph 1"
                      />
                    )}
                  />
                </Stack>
              </Grid>
              {/* Third  */}
              <Grid item xs={3}>
                <Stack>
                  <Autocomplete
                    value={graph2}
                    onChange={updateSecondGraph}
                    freeSolo
                    id="graph-2"
                    disableClearable
                    size="small"
                    options={comparisonGraphDataVal?.map(
                      (option) => option.label
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                        placeholder="Select Graph 2"
                      />
                    )}
                  />
                </Stack>
              </Grid>
            </Grid>
            <>
              <Chart
                chartType="Bar"
                width="100%"
                height="300px"
                data={CompariosnCountryData}
              />
              comparison data graph
              <Chart
                chartType="Bar"
                width="100%"
                height="300px"
                data={CompariosnData}
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
export default UserGraphView;
