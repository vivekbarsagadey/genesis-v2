import React, { useEffect, useState } from "react";
import { ListComponentProps } from "./props";
import PieChart from "react-pie-graph-chart";
import { ICompany } from "../models/company.model";

const CompanyGraphView = ({ companies }: ListComponentProps) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let _data = [
      {
        type: "India",
        value: companies.filter((item:ICompany) => item.country === "India")?.length,
        color: "#E97D30",
      },
      {
        type: "Australia",
        value: companies.filter((item:ICompany) => item.country === "Australia").length,
        color: "#62B170",
      },
      {
        type: "America",
        value: companies.filter((item:ICompany) => item.country === "America").length,
        color: "#F1AF13",
      },
      {
        type: "Spain",
        value: companies.filter((item:ICompany) => item.country === "Spain").length,
        color: "#4BA2DA",
      },
      {
        type: "US",
        value: companies.filter((item:ICompany) => item.country === "US").length,
        color: "#F1AF13",
      },
      {
        type: "UK",
        value: companies.filter((item:ICompany) => item.country === "UK").length,
        color: "#F1AF13",
      },
    ];
    setData(_data);
  }, [companies]);
  return (
    <div>
      <div>
        <PieChart data={data} />
      </div>
    </div>
  );
};

export default CompanyGraphView;
