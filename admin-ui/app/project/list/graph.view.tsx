import React from "react";
import PieChart from "react-pie-graph-chart";
import {  Status } from "../models";
import IProject from "../project.model";

import { ListComponentProps } from "./props";

const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

const ProjectGraphView = ({ projects }: ListComponentProps) => {
  const companyStatus = [
    {
      type: "ACTIVE",
      value: projects.filter((item: IProject) => item.status == statusSet[1])
        .length,
      color: "#0a9523",
    },
    {
      type: "INACTIVE",
      value: projects.filter((item: IProject) => item.status == statusSet[2])
        .length,
      color: "#f50a0a",
    },
  ];

  return (
    <div>
      <PieChart data={companyStatus} />
    </div>
  );
};

export default ProjectGraphView;
