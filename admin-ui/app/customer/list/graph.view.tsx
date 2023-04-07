import PieChart from "react-pie-graph-chart";
import { ListComponentProps } from "./props";

const CustomerGraphView = ({ customer }: ListComponentProps) => {
  const companyStatus = [
    {
      type: "India",
      value: customer?.filter((item) => item.country === "India")?.length,
      color: "#4d7c0f",
    },
    {
      type: "Australia",
      value: customer.filter((item) => item.country === "Australia").length,
      color: "#62B170",
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
  ];

  return (
    <div>
      <PieChart data={companyStatus} />
    </div>
  );
};

export default CustomerGraphView;
