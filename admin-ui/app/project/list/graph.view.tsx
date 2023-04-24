import { Box, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import moment from "moment";
import React, { useState } from "react";
import { Chart } from "react-google-charts";
import MonthPieChart from "./month.pie.chart";
import ProjectPieChart from "./pie.chart";
import { ListComponentProps } from "./props";

const options = {
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { type: "line" },
};
const graphViewTitle = {
  seriesType: "bars",
  series: { type: "line" },
};

const ProjectGraphView = ({ projects }: ListComponentProps) => {
  const [graphView, setGraphView] = useState<string>("Status");
  const [comparisiongraphView, setComparisionGraphView] = useState<string>("Month");

  const updateGrpahView = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setGraphView(value);
  };
  const updateComparisionGrpahView = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setComparisionGraphView(value);
  };

  let keys = Object.keys(projects[0]);
  const graphTypeVal = keys.filter((element) => {
    if (
      element === "country" ||
      element === "state" ||
      element === "city" ||
      element === "status" ||
      element === "application"
    ) {
      return true;
    }
    return false;
  });


  const comparisionType = [
  { title: 'Today' },
  { title: 'Last 7 days'},
  { title: 'Month' },
  ]

  const statusData = [
    ["Status", "Users"],
    ["ACTIVE", projects.filter((item) => item.status === "ACTIVE").length],
    ["INACTIVE", projects.filter((item) => item.status === "INACTIVE").length],
  ];

  const stateData = [
    ["projects", "State"],
    ["Bihar", projects.filter((item) => item.state === "Bihar").length],
    [
      "Madhya Pradesh",
      projects.filter((item) => item.state === "Madhya Pradesh").length,
    ],
    ["UP", projects.filter((item) => item.state === "UP").length],
    [
      "Maharastra",
      projects.filter((item) => item.state === "Maharastra").length,
    ],
    ["Punjab", projects.filter((item) => item.state === "Punjab").length],
    ["UK", projects.filter((item) => item.state === "UK").length],
    ["Gujrat", projects.filter((item) => item.state === "Gujrat").length],
    ["Karnataka", projects.filter((item) => item.state === "Karnataka").length],
    [
      "Jammu & Kashmir",
      projects.filter((item) => item.state === "Jammu & Kashmir").length,
    ],
  ];
  const countryData = [
    ["projects", "Country"],
    ["India", projects.filter((item) => item.country === "India").length],
    [
      "Australia",
      projects.filter((item) => item.country === "Australia").length,
    ],
    ["America", projects.filter((item) => item.country === "America").length],
    ["Spain", projects.filter((item) => item.country === "Spain").length],
    ["US", projects.filter((item) => item.country === "US").length],
    ["UK", projects.filter((item) => item.country === "UK").length],
    ["Dubai", projects.filter((item) => item.country === "Dubai").length],
    ["Srilanka", projects.filter((item) => item.country === "Srilanka").length],
    ["Thailand", projects.filter((item) => item.country === "Thailand").length],
  ];
  const applicationData = [
    ["projects", "Application"],
    [
      "Business to Customer - Web",
      projects.filter(
        (item) => item.application === "Business to Customer - Web"
      ).length,
    ],
    [
      "Business to Customer - Mobile",
      projects.filter(
        (item) => item.application === "Business to Customer - Mobile"
      ).length,
    ],
    [
      "Business to Business - Web",
      projects.filter(
        (item) => item.application === "Business to Business - Web"
      ).length,
    ],
    [
      "Business to Business - Mobile",
      projects.filter(
        (item) => item.application === "Business to Business - Mobile"
      ).length,
    ],
  ];

  const createdDataData = [
    ["Month", "Count"],
    [
      "JAN",
      projects
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Jan").length,
    ],
    [
      "FEB",
      projects
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Feb").length,
    ],
    [
      "MAR",
      projects
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Mar").length,
    ],
    [
      "APR",
      projects
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Apr").length,
    ],
    [
      "MAY",
      projects
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "May").length,
    ],
    [
      "JUN",
      projects
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Jun").length,
    ],
    [
      "JUL",
      projects
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Jul").length,
    ],
    [
      "AUG",
      projects
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Aug").length,
    ],
    [
      "SEP",
      projects
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Sep").length,
    ],
    [
      "OCT",
      projects
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Oct").length,
    ],
    [
      "NOV",
      projects
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Nov").length,
    ],
    [
      "DEC",
      projects
        .map((ele) => moment(ele.updatedAt).format("MMM"))
        .filter((d) => d === "Dec").length,
    ],
  ];
  const createdTodaysData = [
    ["Month", "Count"],
    [
      "",
      projects
        .map((ele) => moment(ele.createdAt).format("DDD"))
        .filter((d) => d === "Day").length,
    ],
    
  ];
  const createdDaysData = [
    ["Month", "Count"],
    [
      "Sun",
      projects
        .map((ele) => moment(ele.updatedAt).format("DDD"))
        .filter((d) => d === "Sun").length,
    ],
    [
      "Mon",
      projects
        .map((ele) => moment(ele.updatedAt).format("DDD"))
        .filter((d) => d === "Mon").length,
    ],
    [
      "Tue",
      projects
        .map((ele) => moment(ele.updatedAt).format("DDD"))
        .filter((d) => d === "Tue").length,
    ],
    [
      "Wed",
      projects
        .map((ele) => moment(ele.updatedAt).format("DDD"))
        .filter((d) => d === "Wed").length,
    ],
    [
      "Thu",
      projects
        .map((ele) => moment(ele.updatedAt).format("DDD"))
        .filter((d) => d === "Thu").length,
    ],
    [
      "Fri",
      projects
        .map((ele) => moment(ele.updatedAt).format("DDD"))
        .filter((d) => d === "Fri").length,
    ],
    [
      "Sat",
      projects
        .map((ele) => moment(ele.updatedAt).format("DDD"))
        .filter((d) => d === "Sat").length,
    ],
    
  ];
  return (
    <Box mr={2}>
      <Grid container spacing={2}  mt={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3.5}>
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
                  fullWidth
                />
              )}
            />
          </Stack>
        </Grid>
        <Grid item xs={2.3}></Grid>
        <Grid item xs={3.5}>
          <Stack>
          <Autocomplete
          value={comparisiongraphView}
          onChange={updateComparisionGrpahView}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        size="small"
        options={comparisionType.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            placeholder="Select Graph View"
                  fullWidth
          />
        )}
      />
          </Stack>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={9}>
              <ProjectPieChart
                stateData={stateData}
                graphView={graphView}
                statusData={statusData}
                countryData={countryData}
                applicationData={applicationData}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid>
            <MonthPieChart options={options} option={graphViewTitle}
            createdDataData={createdDataData} 
            comparisiongraphView={comparisiongraphView}
            createdTodaysData={createdTodaysData} createdDaysData={createdDaysData}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
};

export default ProjectGraphView;
