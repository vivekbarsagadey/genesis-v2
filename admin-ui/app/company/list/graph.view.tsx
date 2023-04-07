import React from "react";
import PieChart from "react-pie-graph-chart";
import { ICompany, Status } from "../models";
import { ListComponentProps } from "./props";

const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

const CompanyGraphView = ({ companies }: ListComponentProps) => {
  const companyStatus = [
    {type: "NEW",value: companies.filter((item: ICompany) => item.status == statusSet[0])?.length,color: "#083ff3"},
    {type: "ACTIVE",value: companies.filter((item: ICompany) => item.status == statusSet[1]).length,color: "#0a9523"},
    {type: "INACTIVE",value: companies.filter((item: ICompany) => item.status == statusSet[2]).length,color: "#f50a0a"},
  ];
  return (
    <div>
      <PieChart data={companyStatus} />
    </div>
  );
};

export default CompanyGraphView;
