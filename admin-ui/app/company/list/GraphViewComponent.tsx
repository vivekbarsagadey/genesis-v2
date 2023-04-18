import React from 'react'
import ICompanyComponentProps from '../company.props'
import PieChart from "react-pie-graph-chart";
interface ListComponentProps extends ICompanyComponentProps {}
const GraphViewComponent = ({ items }: ListComponentProps) => {
   

    const example = [
      {
        type: "India",
        value: items?.filter(item=>item.country==="India")?.length,
        color: "#E97D30",
      },
      {
        type: "Australia",
        value: items.filter(item=>item.country==="Australia").length,
        color: "#62B170",
      },
      {
        type: "America",
        value: items.filter(item=>item.country==="America").length,
        color: "#F1AF13",
      },
      {
        type: "Spain",
        value: items.filter(item=>item.country==="Spain").length,
        color: "#4BA2DA",
      },
      {
        type: "US",
        value: items.filter(item=>item.country==="US").length,
        color: "#F1AF13",
      },
      {
        type: "UK",
        value: items.filter(item=>item.country==="UK").length,
        color: "#F1AF13",
      },
    ];
  return (
    <div>
     <PieChart data={example} />
    </div>
  )
}

export default GraphViewComponent