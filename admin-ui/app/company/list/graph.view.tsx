import React from "react";
import PieChart from "react-pie-graph-chart";
import { ICompany } from "../models";
import { ListComponentProps } from "./props";

const CompanyGraphView = ({ companies }: ListComponentProps) => {
  const example = [
    {
      type: "NEW",
      value: companies.filter((item: ICompany) => item.status === "NEW")
        ?.length,
      color: "#083ff3",
    },
    {
      type: "ACTIVE",
      value: companies.filter((item: ICompany) => item.status === "ACTIVE")
        .length,
      color: "#0a9523",
    },
    {
      type: "INACTIVE",
      value: companies.filter((item: ICompany) => item.status === "INACTIVE")
        .length,
      color: "#f42f08",
    },
  ];

  return (
    <div>
      <PieChart data={example} />
    </div>
  );
};

export default CompanyGraphView;
