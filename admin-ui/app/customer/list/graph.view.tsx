import React from "react";
import PieChart from "react-pie-graph-chart";
import { ICustomer, Status } from "../models";

import { ListComponentProps } from "./props";

const statusSet = Object.keys(Status).filter((v) => isNaN(Number(v)));

const CustomerGraphView = ({ customer }: ListComponentProps) => {
  const companyStatus = [
    {
      type: "NEW",
      value: customer.filter((item: ICustomer) => item.status == statusSet[0])
        ?.length,
      color: "#083ff3",
    },
    {
      type: "ACTIVE",
      value: customer.filter((item: ICustomer) => item.status == statusSet[1])
        .length,
      color: "#0a9523",
    },
    {
      type: "INACTIVE",
      value: customer.filter((item: ICustomer) => item.status == statusSet[2])
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

export default CustomerGraphView;
