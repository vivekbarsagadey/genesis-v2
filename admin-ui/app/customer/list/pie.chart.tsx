import React from "react";
import { Chart } from "react-google-charts";

const CustomerPieChart = ({ cityData }) => {
  return (
    <>
      <Chart
        chartType="PieChart"
        data={cityData}
        width={"100%"}
        height={"320px"}
      />
    </>
  );
};

export default CustomerPieChart;
